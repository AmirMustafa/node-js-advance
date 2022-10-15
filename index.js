import { createServer } from 'http';
import { stat, createReadStream, createWriteStream } from 'fs';
import { promisify } from 'util';
import multiparty from 'multiparty';
const fileName = 'powder-day.mp4';
const fileInfo = promisify(stat);

// Video Streaming
const responseWithVideo = async (req, res) => {
    const { size } = await fileInfo(fileName);
    const range = req.headers.range;
    if (range) {
        let [start, end] = range.replace(/bytes=/, '').split('-');
        start = parseInt(start, 10);   
        end = end ? parseInt(end, 10) : size-1;  // there can be end in range or while video end
        res.writeHead(206, {
            'Content-Range': `bytes ${start}-${end}/${size}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': end - start + 1,
            'Content-Type': 'video/mp4',
        });   
        createReadStream(fileName, { start, end }).pipe(res);
    } else {
        res.writeHead(200, {
         'Content-Length': size,
         'Content-Type': 'video/mp4'
        });
        createReadStream(fileName).pipe(res);
    }
}

createServer((req, res) => {
    if(req.method === 'POST') {
        let form = new multiparty.Form();
        form.on('part', (part) => {
            // console.log('part ===>', part);
            part
              .pipe(createWriteStream(`./${part.filename}`))
              .on('close', () => {
                    res.writeHead(200, {  'Content-Type': 'text/html'});
                    res.end(`<h1>File uploaded: ${part.filename}</h1>`);
               })
        });
        form.parse(req);
        // req.pipe(res);            // req is readable stream, res is writable stream
        // req.pipe(process.stdout); // will display in terminal
        // req.pipe(createWriteStream('./upload.file')); // writing to a file

    } else if(req.url === '/video') {
        responseWithVideo(req, res);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <form enctype="multipart/form-data" method="POST" action="">
                <input type="file" name="upload-file" />
                <button type="submit">Upload File</button>
            </form>
        `);
    }
}).listen(3000, () => console.log('Server listening on port - 3000'));
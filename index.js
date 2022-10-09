import { createServer } from 'http';
import { stat, createReadStream } from 'fs';
import { promisify } from 'util';
const fileName = 'powder-day.mp4';
const fileInfo = promisify(stat);

createServer(async (req, res) => {
    const { size } = await fileInfo(fileName);
    res.writeHead(200, {
       'Content-Length': size,
       'Content-Type': 'video/mp4'
    });
    createReadStream(fileName).pipe(res);

}).listen(3000, () => console.log('Server listening on port - 3000'));
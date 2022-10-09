import { createServer } from 'http';
import { createReadStream } from 'fs';
const fileName = 'powder-day.mp4';

createServer((req, res) => {
    res.writeHead(200, {  'Content-Type': 'video/mp4'});
    createReadStream(fileName).pipe(res);

}).listen(3000, () => console.log('Server listening on port - 3000'));
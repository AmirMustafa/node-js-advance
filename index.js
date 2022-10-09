import { PassThrough, Duplex } from 'stream';

import { createReadStream, createWriteStream } from 'fs';

const readStream = createReadStream("./powder-day.mp4");
const writeStream = createWriteStream("copy.mp4");

class Throttle extends Duplex {
    constructor(milliseconds) {
        super();
        this.delay = milliseconds;
    }

    _write(chunk, encoding, callback) {
        this.push(chunk);
        setTimeout(callback, this.delay);
    }

    _read() {}

    _final() {
        this.push(null);
    }
}

// Duplex stream
const report = new PassThrough();
const throttle = new Throttle(100);

let total = 0;
report.on('data', (chunk) => {
    total += chunk.length;
    console.log(`Bytes: ${total}`);
});

readStream
    .pipe(throttle)
    .pipe(report)
    .pipe(writeStream)
    .on('error', console.error)







// const writeStream = createWriteStream("copy.mp4", {
//     highWaterMark: 2628920
// });

// readStream.on("data", (chunk) => {
//     const result = writeStream.write(chunk);
//     if(!result) {
//         console.log('backpressure');
//         readStream.pause();
//     }
//     // console.log('size: ' + chunk.length);
//     // console.log("read data ==>", chunk);
// });

// readStream.on("error", (error) => {
//     console.log("an error occurred: ", error.message);
// });

// readStream.on("end", () => {
//     writeStream.end();
//     // console.log("read stream finished.");
// });

// writeStream.on("close", () => {
//     process.stdout.write('file copied\n');
// });

// writeStream.on("drain", () => {
//     console.log('drained');
//     readStream.resume();
// });
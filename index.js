import { createReadStream, createWriteStream } from 'fs';

// Write Stream: Idea is to create copy of mp4 file
const readStream = createReadStream("./powder-day.mp4");
const writeStream = createWriteStream("copy.mp4");

readStream.pipe(writeStream).on('error', console.error)



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
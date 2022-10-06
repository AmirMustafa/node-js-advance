import { createReadStream, createWriteStream } from 'fs';

// Write Stream: Idea is to create copy of mp4 file
const readStream = createReadStream("./powder-day.mp4");
const writeStream = createWriteStream("copy.mp4");

readStream.on("data", (chunk) => {
    const result = writeStream.write(chunk);
    if(!result) {
        console.log('backpressure');
        readStream.pause();
    }
    // console.log('size: ' + chunk.length);
    // console.log("read data ==>", chunk);
});

readStream.on("error", (error) => {
    console.log("an error occurred: ", error.message);
});

readStream.on("end", () => {
    writeStream.end();
    // console.log("read stream finished.");
});

writeStream.on("close", () => {
    process.stdout.write('file copied\n');
});

writeStream.on("drain", () => {
    console.log('drained');
    readStream.resume();
});











// readStream.pause();

// process.stdin.on("data", (chunk) => {
//     if(chunk.toString().trim() === 'finish') {
//         readStream.resume();
//     }
//    readStream.read();
// })

// // Non-flowing streams - user have to ask for streams from terminal
// process.stdin.on("data", (chunk) => {
//     var text = chunk.toString().trim();
//     console.log('echo: ' + text);
// })









// import { Readable } from 'stream';

// const peaks = [
//     "Tallac",
//     "Ralston",
//     "Rubicon",
//     "Twin Peaks",
//     "Castle Peaks",
//     "Rose",
//     "Freel Peak"
// ];

// class StreamFromArray extends Readable {
//     constructor (array) {
//         super({ objectMode: true });
//         // super({ encoding: 'UTF-8' });  // if we will pass UTF-8 - string mode, if kept empty - buffer mode
//         this.array = array;
//         this.index = 0;
//     }

//     _read() {
//         if(this.index <= this.array.length) {
//             const chunk = {
//                 data: this.array[this.index],
//                 index: this.index
//             };
//             // const chunk = this.array[this.index];
//             this.push(chunk);
//             this.index += 1;
//         } else {
//             this.push(null);
//         }
//     }
// }

// const peakStream = new StreamFromArray(peaks);

// peakStream.on('data' , (chunk) => console.log(chunk));

// peakStream.on('end', () => console.log('done !'));


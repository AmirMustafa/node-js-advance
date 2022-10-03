import { Readable } from 'stream';

const peaks = [
    "Tallac",
    "Ralston",
    "Rubicon",
    "Twin Peaks",
    "Castle Peaks",
    "Rose",
    "Freel Peak"
];

class StreamFromArray extends Readable {
    constructor (array) {
        super({ objectMode: true });
        // super({ encoding: 'UTF-8' });  // if we will pass UTF-8 - string mode, if kept empty - buffer mode
        this.array = array;
        this.index = 0;
    }

    _read() {
        if(this.index <= this.array.length) {
            const chunk = {
                data: this.array[this.index],
                index: this.index
            };
            // const chunk = this.array[this.index];
            this.push(chunk);
            this.index += 1;
        } else {
            this.push(null);
        }
    }
}

const peakStream = new StreamFromArray(peaks);

peakStream.on('data' , (chunk) => console.log(chunk));

peakStream.on('end', () => console.log('done !'));


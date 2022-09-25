var fs = require('fs');
var { promisify } = require('util');

var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readdir = promisify(fs.readdir);

var delay = (seconds) => new Promise((resolves) => {
  setTimeout(resolves, seconds*1000);
});

Promise.race([
  delay(5),
  delay(2),
  delay(3),
  delay(5),
]).then(() => readdir(__dirname))
  .then(console.log)

// Promise.all([
//   unlink('readme.md'),
//   unlink('readme.txt'),
//   delay(3),
//   unlink('readme.json'),
// ]).then(() => readdir(__dirname))
//   .then(console.log)


// Sequential Execution
// var beep = () => process.stdout.write("\x07");

// async function start() {
//   const files = await readdir(__dirname);
//   console.log(files);
// }

// start();

// Example 1
// const doStuffSequentially = async () => {
//   console.log('starting');
//   await delay(1);
//   console.log('waiting');
//   await delay(2);
//   try {
//     await writeFile('file.txt', 'Sample File...');
//     console.log('waiting some more');
//     beep();
//   } catch (err) {
//     console.log(err);
//   }
//   console.log('file.txt created');
//   await unlink('file.txt');
//   beep();
//   console.log('file.txt removed');
//   console.log('sequential execution complete');

//   return Promise.resolve();
// }

// const doStuffSequentially = () => Promise.resolve()
//   .then(() => console.log('starting'))
//   .then(() => delay(1))
//   .then(() => 'waiting')
//   .then(console.log)
//   .then(() => delay(2))
//   .then(() => writeFile('file.txt', 'Sample File...'))
//   .then(() => 'waiting some more')
//   .then(console.log)
//   .then(beep)
//   .then(() => 'file.txt created')
//   .then(console.log)
//   .then(() => delay(3))
//   .then(() => unlink('file.txt'))
//   .then (beep)
//   .then(() => 'file.txt removed')
//   .then(() => 'sequential execution complete')
//   .then(console.log)
//   .catch(console.error)

// const doStuffSequentially = () => {
//     console.log('starting');
//     setTimeout(() => {
//         console.log('waiting');
//         setTimeout(() => {
//             console.log('waiting some more');
//             fs.writeFile('file.txt', 'Sample File...', error => {
//                 if (error) {
//                     console.error(error);
//                 } else {
//                     beep();
//                     console.log('file.txt created')
//                     setTimeout(() => {
//                         beep();
//                         fs.unlink('file.txt', error => {
//                             if (error) {
//                                 console.error(error);
//                             } else {
//                                 console.log('file.txt removed');
//                                 console.log('sequential execution complete');
//                             }
//                         })
//                     }, 3000)
//                 }
//             });
//         }, 2000)
//     }, 1000)
// }

// doStuffSequentially()
//   .then(() => {
//     // DO Something
//   })


// ----------------------------------------------------------------

// var fs = require('fs');
// var { promisify } = require('util');

// var writeFile = promisify(fs.writeFile);

// writeFile('sample.txt', 'This is a sample file')
//   .then(() => console.log('file created successfully'))
//   .catch((error) => console.log('error creating file'));

// var delay = (seconds, callback) => {
//   if(seconds > 3) {
//     callback(new Error(`${seconds} is too long`));
//   } else {
//     setTimeout(callback(null, `the ${seconds} delay is over.`, seconds*1000));
//   }
// };

// var promiseDelay = promisify(delay);

// promiseDelay(6)
//   .then(console.log)
//   .catch((err) => console.log(`error: ${err.message}`))

// delay(4, (error, message) => {
//   if(error) {
//     console.log(error.message);
//   } else {
//     console.log(message);
//   }
// });



// ----------------------------------------------------------------


// DYNAMIC DATA PASS
// var delay = (seconds) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('message after delay finishes');
//     }, seconds * 1000);
// });

// console.log('starting delays');

// // We can chain as many promise here but in the neat way
// delay(2)
//   .then(console.log )
//   .then(() => 42)
//   .then((number) => console.log(`hello world ${number}`));
// delay(2).then((message) => console.log(message));


// var delay = (seconds) => new Promise((resolve, reject) => {
//     setTimeout(resolve, seconds * 1000);
// });

// console.log('starting delays');

// delay(2).then(() => {
//     console.log('two seconds');
// });


// Callback Hell
// var delay = (seconds, callback) => {
//     setTimeout(callback, seconds * 1000);
// };

// console.log('starting delays');

// delay(2, () => {
//     console.log('two seconds');
// });
var { promisify } = require('util');

var delay = (seconds, callback) => {
  if(seconds > 3) {
    callback(new Error(`${seconds} is too long`));
  } else {
    setTimeout(callback(null, `the ${seconds} delay is over.`, seconds*1000));
  }
};

var promiseDelay = promisify(delay);

promiseDelay(6)
  .then(console.log)
  .catch((err) => console.log(`error: ${err.message}`))

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
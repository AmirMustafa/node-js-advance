// DYNAMIC DATA PASS
var delay = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('message after delay finishes');
    }, seconds * 1000);
});

console.log('starting delays');

// We can chain as many promise here but in the neat way
delay(2)
  .then(console.log )
  .then(() => 42)
  .then((number) => console.log(`hello world ${number}`));
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
var delay = (seconds) => new Promise((resolve, reject) => {
    setTimeout(resolve, seconds * 1000);
});

console.log('starting delays');

delay(2).then(() => {
    console.log('two seconds');
});


// Callback Hell
// var delay = (seconds, callback) => {
//     setTimeout(callback, seconds * 1000);
// };

// console.log('starting delays');

// delay(2, () => {
//     console.log('two seconds');
// });
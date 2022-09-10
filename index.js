function delay(seconds, callback) {
    setTimeout(callback, seconds * 1000);
};

console.log('starting delays');

delay(2, () => {
    console.log('two seconds');

    delay(1, () => {
        console.log('three seconds');

        delay(1, () => {
            console.log('four seconds');
        })
    })
});


// function delay(seconds, callback) {
//     setTimeout(callback, seconds * 1000);
// };

// console.log('starting delays');

// delay(2, () => {
//     console.log('two seconds');
// });



// function hideString(str, done) {
//     process.nextTick(() => {
//         done(str.replace(/[a-zA-Z]/g, 'X'));
//     });
// }

// hideString("Hello World",  (hidden) => {
//     console.log(hidden);   // RUNS SECOND
// });

// console.log('end');   // RUNS FIRST


// function hideString(str, done) {
//     done(str.replace(/[a-zA-Z]/g, 'X'));
// }

// hideString("Hello World",  (hidden) => {
//     console.log(hidden);  // RUNS FIRST
// });

// console.log('end');      // RUNS SECOND





// EG 1: Synchronous
// function hideString(str) {
//     return str.replace(/[a-zA-Z]/g, 'X');
// }

// var hidden = hideString("Hello World");   // RUNS FIRST

// console.log( hidden );      // RUNS SECOND

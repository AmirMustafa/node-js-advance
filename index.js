function hideString(str, done) {
    process.nextTick(() => {
        done(str.replace(/[a-zA-Z]/g, 'X'));
    });
}

hideString("Hello World",  (hidden) => {
    console.log(hidden);   // RUNS SECOND
});

console.log('end');   // RUNS FIRST


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

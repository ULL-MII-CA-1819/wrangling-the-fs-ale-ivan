
const fs = require('fs');

console.log('Now watchking for changes at data/');
fs.watch('./data/', (event, filename) => {
    console.log(`File ${filename} changed with the event ${event}`);
    console.log('Still watching for changes...');
});

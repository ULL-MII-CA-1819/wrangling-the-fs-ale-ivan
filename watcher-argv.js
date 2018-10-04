

const
    fs = require('fs'),
    filename = process.argv[2];

if(!filename)
    throw Error("A file or either a directory must be specified!");
console.log(`Now watching @ ${filename} for changes`);
fs.watch(filename, (event, filename) => {
    console.log(`File ${filename} just changed with this event: ${event}`);
    console.log(`Still watching @ ${filename}`)
});

const
    fs = require('fs'),
    spawn = require('child_process').spawn,
    filename = process.argv[2];

if(!filename)
    throw Error("A file or either a directory must be specified!");
console.log(`Now watching @ ${filename} for changes`);
fs.watch(filename, () => {
    let ls = spawn('ls', ['-lh', filename]);
    ls.stdout.pipe(process.stdout);
});


let index = 2; //Eliminamos node y el nombre del .js
if(index == process.argv.length)
    throw Error("A file or either a directory must be specified!");
while(index < process.argv.length) {
  const
      fs = require('fs'),
      spawn = require('child_process').spawn,
      filename = process.argv[index];

  console.log(`Now watching @ ${filename} for changes`);
  fs.watch(filename, () => {
      let ls = spawn('ls', ['-lh', filename]);
      ls.stdout.pipe(process.stdout);
  });
  index++;
}

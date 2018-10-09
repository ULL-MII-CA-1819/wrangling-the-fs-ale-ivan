
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
      let output = '';
      ls.stdout.on('data', (chunk) => {
          output += chunk.toString();
      });
      ls.on('close', () => {
          let parts = output.split(/\s+/);
          console.log(parts[0], parts[4], parts[8]);
      });
  });
  index++;
}

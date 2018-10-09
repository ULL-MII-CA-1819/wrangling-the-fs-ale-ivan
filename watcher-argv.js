
let index = 2; //Eliminamos node y el nombre del .js
if(index == process.argv.length)
    throw Error("A file or either a directory must be specified!");
while(index < process.argv.length) {
  const
      fs = require('fs'),
      filename = process.argv[index];
  console.log(`Now watching @ ${filename} for changes`);
  fs.watch(filename, (event, filename) => {
      console.log(`File ${filename} just changed with this event: ${event}`);
      console.log(`Still watching @ ${filename}`)
  });
  index++;
}

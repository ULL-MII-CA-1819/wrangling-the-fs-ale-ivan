

let index = 2; //Eliminamos node y el nombre del .js
var log = console.log.bind(console);
if(index == process.argv.length)
    throw Error("A file or either a directory must be specified!");
while(index < process.argv.length) {
  const
      fs = require('fs'),
      spawn = require('child_process').spawn,
      filename = process.argv[index];

  console.log(`Now watching @ ${filename} for changes`);
  let watcher = fs.watch(filename, () => {
      let ls = spawn('ls', ['-lh', filename]);
      //Controlando el delete file, fortifying code
      ls.on('error', function(err) {
      	process.stderr.write("Ha habido un ERROR: " + err.message + "\n");
        watcher.close();
      });
      ls.stdout.pipe(process.stdout);
  });

  index++;
}

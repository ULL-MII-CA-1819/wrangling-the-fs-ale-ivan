//Escribe en un fichero de forma asincrona

const fs = require('fs');
fs.writeFile('targetWrite.txt', 'witty message', function(err){
  if(err) {
    throw err;
  }
  console.log("File saved!");
});

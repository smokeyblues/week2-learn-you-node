var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);
var fileBuffer =file.toString();
console.log(fileBuffer.split('\n').length - 1)
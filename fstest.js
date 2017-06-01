let fs = require('fs');

const img = fs.readFileSync('./test/me.png');
console.log(img);
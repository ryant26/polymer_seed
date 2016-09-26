var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../build/bundled/'));

const port = 9000;
app.listen(port);

console.log(`Listening on port: ${9000}`);
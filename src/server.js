require('babel-register')({
  presets: ['es2015', 'react', 'stage-2']
});

var express = require('express');
var app = express();

app.use(express.static('dist'));

var PORT = 3000;
app.listen(PORT, function() {
  console.log('http://localhost:' + PORT);
});

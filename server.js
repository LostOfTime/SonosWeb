var express = require('express');
var app     = express();
var swig    = require('swig');

// configure template motor
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/static/views');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
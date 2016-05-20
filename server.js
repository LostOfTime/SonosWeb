var express = require('express');
var app     = express();
var swig    = require('swig');

// configure template motor
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/static/views');
app.set('view cache', false);

// Static files
app.use(express.static('static'));

app.get('/', function (req, res) {
    res.render('index', { /* template locals context */ });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
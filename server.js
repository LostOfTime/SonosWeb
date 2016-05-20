var express = require('express');
var app     = express();
var swig    = require('swig');
var sonos   = require('sonos')

// configure template motor
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/static/views');
app.set('view cache', false);

// Static files
app.use(express.static('static'));

var SonosPlayer = new sonos.Sonos('192.168.14.100'); // TODO : find a wat to discover sonos and IPs

app.get('/api/device/currentTrack', function(req, res){
    SonosPlayer.currentTrack(function (err, data) {
        res.json({
            currentTrack : data
        });
    });
});

app.get('/api/rooms', function(req, res){
    res.json([])
});

app.get('/', function (req, res) {
    res.render('index', {});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
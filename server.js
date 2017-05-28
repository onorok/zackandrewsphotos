var express = require('express'),
    favicon = require('serve-favicon'),
    fs = require('fs'),
    api = require('./api');
    
var app = module.exports = express();
var server = require('http').createServer(app);

/////
app.use(favicon(__dirname + '/favicon.ico'));
app.use('/template', express.static(__dirname + '/template'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/views', express.static(__dirname + '/views'));
app.use('/resume', express.static(__dirname + '/resume'));
app.use('/photos', express.static(__dirname + '/photos'));

///// API
app.get('/API/getImages', api.getImages);

///// Not above? Send them to index.html and let Angular handle the routing
app.all('/*', function(req, res, next) {
    res.sendFile('index.html', {root: __dirname});
});

///// Start Server
server.listen(process.env.PORT || 3000, function() {
	console.log('Server started on port ' + (process.env.PORT || 3000));
});
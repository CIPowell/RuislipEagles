var express = require('express'),
    swig = require('swig'),
    app = express();

swig.setDefaults({ loader: swig.loaders.fs(__dirname + '/../templates' )});

app.use(express.logger());
app.use('/css', express.static(__dirname + '/../css'));
app.use('/js', express.static(__dirname + '/../js'));
app.use('/images', express.static(__dirname + '/../images'));

app.get('/', function(req, res) {
    res.send(swig.renderFile('index.html', { pagename:'Home' }));
});


app.get('/news', function(req, res) {
    res.send(swig.renderFile('news.html', { pagename:'News' }));
});

module.exports = app;
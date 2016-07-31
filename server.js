const express = require('express');
const app = express();

const expressReactViews = require('express-react-views');
// const Babel = require('babel/register');

app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');

app.engine('jsx', expressReactViews.createEngine({transformViews: false}));

// Babel({ignore: false});
require('babel/register')({
    ignore: false
});
app.use('/', function (req, res) {
    res.render('index', '');
});
app.listen(3000, function () {
    console.log('Listen on 3000,Server is running..');
});
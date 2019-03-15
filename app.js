const  express = require('express');
const exphbs  = require('express-handlebars');
const path=require('path');
var app=express();
const port =5000;
const bodyparser=require('body-parser');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config');
//   // "babel-preset-env": "^1.7.0", 
 // "babel-core": "^6.26.3",
app.use(express.json()); 
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));

 
// Register `hbs.engine` with the Express app ...
app.engine('hbs', exphbs({defaultLayout: 'main',extname:'hbs'}));
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    res.render('index');
});



//webpack

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


app.listen(port, () => {
    console.log(`Server started on port`);
});

const  express = require('express');
const exphbs  = require('express-handlebars');
const path=require('path');
var app=express();
const port =5000;
const bodyparser=require('body-parser');
const api=require('./api/api');
const Upload=require("express-fileupload");
var multer  = require('multer');
const flash=require('connect-flash');
const cooki=require('cookie-parser');
const session=require('express-session');
const passport=require('passport');
//upload 


// require('./config/db');
// const Subject=require('./models/Subejct');
    

//   // "babel-preset-env": "^1.7.0", 
 // "babel-core": "^6.26.3",
app.use(express.json()); 

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'/public')));
app.use('/api',api); 
app.use(cooki());
app.use(session({
    secert:'secret123',
    saveUninitialized:true,
    resave:true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash);
// Register `hbs.engine` with the Express app ...
app.engine('hbs', exphbs({defaultLayout: 'main',extname:'hbs'}));
app.set('view engine', 'hbs');
app.get('/login', (req, res) => {
    res.render('login',{layout: false});
});
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/subject', (req, res) => {
    res.render('subject');
});

app.listen(port, () => {
    console.log(`Server started on port`);
});

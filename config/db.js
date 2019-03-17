const mongoose = require('mongoose');
mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost/SsDb',{ useNewUrlParser: true }
    ).then(()=> console.log('connect to database MongoDB...'));
module.exports={mongoose};
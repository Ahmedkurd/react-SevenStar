const mongoose = require('mongoose');

mongoose.Promise=global.Promise;
const uri='mongodb://localhost/SsDb';
mongoose.connect(uri,{ useNewUrlParser: true }
    ).then(()=> console.log('connect to database MongoDB...'+'\n'+ uri));
module.exports={mongoose};
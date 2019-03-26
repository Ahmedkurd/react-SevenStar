const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
  Name:
  {
      type:String,
      require:true
  },
  Username:
  {
    type:String ,
    require : true

  },
  Password:
  {
    type:String ,
    require : true
  }
});
mongoose.model('User',user);
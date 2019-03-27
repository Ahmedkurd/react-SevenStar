const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt=require('bcrypt-nodejs');
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
user.methods.genaratehash=function(password)
{
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null)
}
user.methods.validPassword=function(password)
{
    return bcrypt.compareSync(password,this.password)
}
mongoose.model('User',user);
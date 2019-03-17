const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectShm = new Schema({
  title:
  {
      type:String,
      require:true
  },
  description:
  {
    type:String ,
    require : true

  },
  pic:
  {
    type:String ,
    require : true
  },
  date:
  {
    type:Date ,
    default:Date.now
  },
  userId:
  {
    type:String ,
    require : true
  },
  rate:
  {
    type:Number ,
    require : true,
    default:0
  },
});
mongoose.model('Subject',subjectShm);
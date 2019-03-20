const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratesubjectShm = new Schema({
  Rate:
  {
      type:Number,
      require:true
  },
  UserId:
  {
    type:String ,
    require : true

  },
  IdSubject:
  {
    type:String ,
    require : true
  }
});
mongoose.model('RateSubject',ratesubjectShm);
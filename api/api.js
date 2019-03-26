const  express = require('express');
const  router = express.Router();
const mongoose = require('mongoose');
const multer  = require('multer');
var fs = require("fs");


require('../config/db');
require('../models/Subejct');
require('../models/rateSubject');
const Subejct=mongoose.model('Subject');
const rateSubject=mongoose.model('RateSubject');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/upload');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
 
  }
})

var upload = multer({ storage: storage })


router.use(express.json()); 
// router.use(bodyparser.urlencoded({ extended: true }));
// router.use(bodyparser.json());

router.post('/addsubject', () => {
   
});


router.post('/addsubject/upload', upload.single('Image'), function (req) {
  
  var data=JSON.parse(req.body.Data);
  
  const newSub=new Subejct(
    {
      title:data.title,
      description:data.Description,
      pic:req.file.path.replace('public', ''),
      userId:1,
      rate:0
    });
    newSub.save(function (err) {
        if (err) return console.error(err);
        console.log("add New Subject into Database ");
        
      });
   console.log("File is Upload");
});

router.get('/getsubject', upload.single('Image'), function (req, res) {
  Subejct.find({}, '_id title description pic date rate userId', function (err, docs) {
     res.send(JSON.stringify(docs));
     
  });
});

router.post('/addrate', function (req,res) {
  
  var useridd=req.body.userid;
  var idd=req.body.idsubject;
  var ratee=req.body.rate;
  console.log(idd+" "+ratee);
 
   rateSubject.count({UserId:useridd,IdSubject:idd},function(err,data){
    console.log("count data : "+data);
    if(data>0)
   {
   
    rateSubject.updateOne({userId:useridd,IdSubject:idd},{ $set: { rate: ratee } },function(){
      console.log('Update Rank Subject'+' '+idd);
      
    });
      Subejct.updateOne({_id:idd},{ $set: { rate: ratee } },function(){
        console.log('Update Subject'+' '+idd);
        
      });
      res.send({data:'ok'});
   }else
   {
    const newRate=new rateSubject(
      {
        Rate:req.body.rate,
        UserId:req.body.userid,
        IdSubject:req.body.idsubject
      });
      newRate.save(function (err) {
      if (err) return console.error(err);
      console.log("add New Rate into Subject ");
   })
   Subejct.updateOne({_id:idd},{ $set: { rate: ratee } },function(){
    console.log('Update Subject'+' '+idd);
    
  });
  res.send({data:'ok'});
  }
  
  
});
  
router.post('/delete', (req, res) => {
  console.log(req.body.id);
  res.send({data:'ok'});
});
router.post('/delsubject', (req, res) => {
  console.log(req.body.id);
  // Subejct.findById(req.body.id, 'pic', function (err, adventure) 
  // {
  //   console.log(adventure);
  //   fs.unlink(adventure, function()
  //   {
  //     console.log("Delete File "+adventure);
  //   })
  // });
  
  // Subejct.deleteOne({IdSubject:req.body.id},function(err,doc){
  //   console.log('delete Subject');
  // });
  // rateSubject.deleteMany({_id:req.body.id},function(err,doc){
  //   console.log('delete rate Subject');
  // })
  res.send({data:'ok'});
});
  
});
router.post('/rate', (req, res) => {
   res.send(req.body);
   console.log(req.body); 
});
module.exports=router;
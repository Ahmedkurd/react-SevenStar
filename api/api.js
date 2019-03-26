const  express = require('express');
const  router = express.Router();
const bodyparser=require('body-parser');
const mongoose = require('mongoose');
const multer  = require('multer');
var fs = require('fs');
const path=require("path");

//upload 
const cors = require('cors');

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

router.post('/addsubject', (req, res) => {
   
});


router.post('/addsubject/upload', upload.single('Image'), function (req, res) {
  
  var data=JSON.parse(req.body.Data);
  
  const newSub=new Subejct(
    {
      title:data.title,
      description:data.Description,
      pic:req.file.path.replace('public', ''),
      userId:1,
      rate:0
    });
    newSub.save(function (err, book) {
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

router.post('/addrate', function (req, res) {
  
  var idd=req.body.idsubject;
  var ratee=req.body.rate;
  console.log(idd+" "+ratee);
   const RateSub=new rateSubject
   ({
     Rate:req.body.rate,
     UserId:req.body.userid,
     IdSubject:req.body.idsubject
   });
   RateSub.save(function (err, book) {
    if (err) return console.error(err);
    console.log("add New Subject into Database ");
   
    Subejct.updateOne({_id:idd},{ $set: { rate: ratee } },function(){
      console.log('update is save'+' '+idd);
      res.send({data:'ok'});
    });
  });
});
router.post('/rate', (req, res) => {
   res.send(req.body);
   console.log(req.body); 
});
module.exports=router;
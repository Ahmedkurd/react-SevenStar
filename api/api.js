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
const Subejct=mongoose.model('Subject');


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
router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());


router.post('/addsubject', (req, res) => {
   
  // console.log(req.body);
  //   const newSub=new Subejct(
  //       {
  //         title:req.body.title,
  //         description:req.body.Description,
  //         pic:'',
  //         userId:1,
  //         rate:0
  //       });
  //       newSub.save(function (err, book) {
  //           if (err) return console.error(err);
  //           console.log("add New Subject into Database ");
            
  //         });
         
     
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
  Subejct.find({}, 'title description pic date rate userId', function (err, docs) {
     res.send(JSON.stringify(docs));
     
  });
});

module.exports=router;
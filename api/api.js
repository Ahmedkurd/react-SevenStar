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

var namepic;
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/upload')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
    namepic='upload/'+file.fieldname + '-' + Date.now();
  }
})

var upload = multer({ storage: storage })


router.post('/addsubject', (req, res) => {
    console.log(namepic);
    const newSub=new Subejct(
        {
          title:req.body.title,
          description:req.body.Description,
          pic:namepic,
          userId:1,
          rate:0
        });
        newSub.save(function (err, book) {
            if (err) return console.error(err);
            console.log("add New Subject into Database ");
            
          });
         
     
});


router.post('/addsubject/upload', upload.single('Image'), function (req, res) {
   console.log("File is Upload");
});
module.exports=router;
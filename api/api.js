const  express = require('express');
const  router = express.Router();
const bodyparser=require('body-parser');
const mongoose = require('mongoose');
const fileUpload=require("express-fileupload");
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
//upload 
router.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));

require('../config/db');
require('../models/Subejct');
const Subejct=mongoose.model('Subject');

router.post('/addsubject', (req, res) => {
    
    const newSub=new Subejct(
        {
          title:req.body.title,
          description:req.body.Description,
          pic:req.body.pic,
          userId:1,
          rate:0
        });
        newSub.save(function (err, book) {
            if (err) return console.error(err);
            console.log("add New Subject into Database ");
            
          });
         
     
});
router.post('/addsubject/upload', (req, res) => {
  //  let file = req.body.pic;
  //   console.log('test'+' '+file);
    
  //   file.mv('/public/upload', function(err) {
  //       if (err)
  //         return res.status(500).send('error   ' +err);
    
  //       res.send('File uploaded!');
  //     });
   let dataa= req.files.data;
    console.log('test '+dataa);
});
router.post('/addsubject/upload', upload.single('avatar'), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})
module.exports=router;
const  express = require('express');
const  router = express.Router();
const bodyparser=require('body-parser');


require('../config/db');
require('../models/Subejct');

router.post('/addsubject', (req, res) => {
     console.log(req.body.title);
});
module.exports=router;
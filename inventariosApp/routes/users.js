var express = require('express');
var router = express.Router();
const {login} =require("../models/User");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/login",(req,res,next)=>{
  console.log(req.body.email,req.body.passwd);
  login(req.body.email,req.body.passwd,(e,d)=>{
    if(d){  
      res.send("login correcto")
      let ses=req.session;
      console.log(ses.id);

    }else{
      res.json(e);
    }
  });
})

module.exports = router;

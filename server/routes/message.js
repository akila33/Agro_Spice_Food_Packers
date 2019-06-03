const router = require('express').Router();
const Message = require('../models/message');
const nodemailer=require('nodemailer');

//Get My Email details
details=require('../details.json');

router.get('/read',(req,res,next)=>{
    Message.find({},(err,messages)=>{
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:messages});
    });
});

router.post('/create',(req,res,next)=>{
    console.log(req.body);
    var newMessage =new Message({
        sender : req.body.sender,
        reciever : req.body.reciever,
        message : req.body.message
    });
    newMessage.save((err,message)=> {
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:message});
    });
});

router.delete('/delete/:id',(req,res,next)=>{
    if(req.body._id!=null){
        Message.findOneAndRemove({_id:req.params.id},(err,message)=>{
            if(err)
                res.status(500).json({errmsg:err});
            res.status(200).json({msg:message});
        })
    }
    
});

router.post("/sendMail",(req,res)=>{
    let email=req.body;
    console.log(email);
    sendMail(email,info=>{
      console.log("The Email has been sent successfull!");
      res.send(info);
    });
  });
  
  async function sendMail(email,callback){
    let transporter = nodemailer.createTransport({
      host:"smtp.gmail.com",
      port: 587,
      secure:false,
      auth:{
        user:details.email,
        pass:details.password
      }
    });
  
    let mailOptions={
      from:'"Agro Spice Food Packers"<agrospice@gmail.com>',//sender address
      to:email.reciever, //reciever
      subject:email.subject,
      html: `<h2>Hey ${email.reciever}</h2><br/>
      <h4>${email.body}</h4>`
    }
  
    let info=await transporter.sendMail(mailOptions);
  
    callback(info);
  }

module.exports = router;
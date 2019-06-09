// Account.JS file to maintain every users account details(SignUp,Login,Orders) and handle routes 

//Including the required packages and assigning it to Local Variables
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');
const config = require('../config');
const checkJWT = require('../middlewares/check-jwt');


//Function to facilitate Sign Up feature 
router.post('/admin-signup', (req, res, next) => {
 let admin = new Admin();
 admin.name = req.body.name;
 admin.email = req.body.email;
 admin.password = req.body.password;
 admin.picture = admin.gravatar();

 Admin.findOne({ email: req.body.email }, (err, existingAdmin) => {
  if (existingAdmin) {
    res.json({
      success: false,
      message: 'Account with that email is already exist'
    });

  } else {
    admin.save();

    var token = jwt.sign({
      admin: admin
    }, config.secret, {
      expiresIn: '7d'
    });

    res.json({
      success: true,
      message: 'Enjoy your token',
      token: token
    });
  }

 });
});

//Function to facilitate admin login feature
router.post('/admin-login', (req, res, next) => {

  Admin.findOne({ email: req.body.email }, (err, admin) => {
    if (err) throw err;

    if (!admin) {
      res.json({
        success: false,
        message: 'Authenticated failed, Admin not found'
      });
    } else if (admin) {

      var validPassword = admin.comparePassword(req.body.password);
      if (!validPassword) {
        res.json({
          success: false,
          message: 'Authentication failed. Wrong password'
        });
      } else {
        var token = jwt.sign({
          admin: admin
        }, config.secret, {
          expiresIn: '7d'
        });

        res.json({
          success: true,
          mesage: "Enjoy your token",
          token: token
        });
      }
    }

  });
});

//Function to handle Admin Profile API (GET,POST) functionality for authenticated users 
router.route('/admin-profile')
  .get(checkJWT, (req, res, next) => {
    Admin.findOne({ _id: req.decoded.admin._id }, (err, admin) => {
      res.json({
        success: true,
        admin: admin,
        message: "Successful"
      });
    });
  })
  .post(checkJWT, (req, res, next) => {
    Admin.findOne({ _id: req.decoded.admin._id }, (err, admin) => {
      if (err) return next(err);

      if (req.body.name) admin.name = req.body.name;
      if (req.body.email) admin.email = req.body.email;
      if (req.body.password) admin.password = req.body.password;

      admin.save();
      res.json({
        success: true,
        message: 'Successfully edited your profile'
      });
    });
  });
 
  router.get('/get-admins',(req,res,next)=>{
    Admin.find({},(err,admins)=>{
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:admins});
    });
  });

  router.delete('/delete/:id',(req,res,next)=>{
    Admin.findOneAndRemove({_id:req.params.id},(err,admin)=>{
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:admin});
    })
  });

  router.put('/update',(req,res,next)=>{
    Admin.findById(req.body._id,(err,admin)=>{
        if(err)
            res.status(500).json({errmsg:err});
            admin.name = req.body.name,
            admin.email = req.body.email,
            admin.password=req.body.password
        admin.save((err,admin)=>{
            if(err)
                res.status(500).json({errmsg:err});
            res.status(200).json({msg:admin});
        });
    });
});


//Exporting the module 
module.exports = router;

const router = require('express').Router();
//const Admin = require('../models/admin');
const Employer = require('../models/employer');

router.get('/read',(req,res,next)=>{
    Employer.find({},(err,employers)=>{
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:employers});
    });
});

router.post('/create',(req,res,next)=>{
    console.log(req.body);
    var newEmployer =new Employer({
        username : req.body.username,
        fullname : req.body.fullname,
        address : req.body.address,
        city : req.body.city,
        mobile : req.body.mobile,
        email : req.body.email,
        password: req.body.password
    });
    newEmployer.save((err,employer)=> {
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:employer});
    });
});

router.delete('/delete/:id',(req,res,next)=>{
    Employer.findOneAndRemove({_id:req.params.id},(err,employer)=>{
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:employer});
    })
});

router.put('/update',(req,res,next)=>{
    Employer.findById(req.body._id,(err,employer)=>{
        if(err)
            res.status(500).json({errmsg:err});
            employer.username = req.body.username,
            employer.fullname = req.body.fullname,
            employer.address = req.body.address,
            employer.city = req.body.city,
            employer.mobile = req.body.mobile,
            employer.email = req.body.email,
            employer.password=req.body.password
        employer.save((err,employer)=>{
            if(err)
                res.status(500).json({errmsg:err});
            res.status(200).json({msg:employer});
        });
    });
});

module.exports = router;
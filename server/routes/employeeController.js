const router = require('express').Router();
const Employee = require('../models/employee');

router.get('/read',(req,res,next)=>{
    Employee.find({},(err,employers)=>{
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:employers});
    });
});

router.post('/create',(req,res,next)=>{
    console.log(req.body);
    var newEmployer =new Employee({
        username : req.body.username,
        fullname : req.body.fullname,
        address : req.body.address,
        mobile : req.body.mobile,
        email : req.body.email,
        salary: req.body.salary
    });
    newEmployer.save((err,employer)=> {
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:employer});
    });
});

router.delete('/delete/:id',(req,res,next)=>{
    Employee.findOneAndRemove({_id:req.params.id},(err,employer)=>{
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:employer});
    })
});

router.put('/update',(req,res,next)=>{
    Employee.findById(req.body._id,(err,employer)=>{
        if(err)
            res.status(500).json({errmsg:err});
            employer.username = req.body.username,
            employer.fullname = req.body.fullname,
            employer.address = req.body.address,
            employer.mobile = req.body.mobile,
            employer.email = req.body.email,
            employer.salary=req.body.salary
        employer.save((err,employer)=>{
            if(err)
                res.status(500).json({errmsg:err});
            res.status(200).json({msg:employer});
        });
    });
});

module.exports = router;

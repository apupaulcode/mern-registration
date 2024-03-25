const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./Register/Register');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/test');

app.post('/register', (req,res)=>{
    const {name,email,passsword}=req.body;
    RegisterModel.findOne({email:email})
    .then(user=>{
        if(user){
            res.json('User Already Exists')
        }else{
            RegisterModel.create({name:name,email:email,password:passsword})
            .then(result=>res.json('Account created'))
            .catch(err=>res.json('Error'))
        }
    })
    .catch(err=>res.json(err))
})



app.listen(3001,()=>{
    console.log('Server is running');
})
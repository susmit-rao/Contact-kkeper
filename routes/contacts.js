const express = require('express');
const router =express.Router();
const User =require('../models/User')
const auth=require('../middelware/auth');
const Contact =require('../models/Contact');
const { check, validationResult } = require('express-validator');


router.get('/',auth, async (req,res) =>{
    try {
        const contacts= await Contact.find({user: req.user.id}).sort({date:-1});
        res.json(contacts);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('error in contact')
    }
});

router.post('/',[auth,[
    check('name','name is required').not().isEmpty()
]], async (req,res) =>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
         return res.status(400).json({errors:errors.array()})
    }
    const {name,email,phone,type}=req.body;
    try {
        const NewContact= new Contact({
            name,email,phone,type
        });

        const contact= await NewContact.save();
        res.json(contact);



        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Cant post contact')
        
    }


    
});

router.put('/:id',(req,res) =>{
    res.send('update contact')
});

router.delete('/:id',(req,res) =>{
    res.send('delete contact')
});


module.exports= router;
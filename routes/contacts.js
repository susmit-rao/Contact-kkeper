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
            name,email,phone,type,user:req.user.id
        });

        const contact= await NewContact.save();
        res.json(contact);



        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Cant post contact')
        
    }


    
});

router.put('/:id',auth,async (req,res) =>{
    const {name,email,phone,type}=req.body;
    const contactFields={};
    if(name) contactFields.name=name;
    if(email) contactFields.email=email;
    if(phone) contactFields.phone=phone;
    if(type) contactFields.type=type;

    try {
        let contact =await Contact.findById(req.params.id);
        if (!contact){
            return res.status(404).json({msg:'Could not find contact'})
        }

        if(contact.user.toString() !=req.user.id){
            return res.status(401).json({msg:'You are not authorised'});
        }

        contact =await Contact.findByIdAndUpdate(req.params.id,{$set:contactFields},{new:true});
        res.json(contact);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Cant post contact')

        
    }
});

router.delete('/:id',auth, async (req,res) =>{
    

    try {
        let contact =await Contact.findById(req.params.id);
        if (!contact){
            return res.status(404).json({msg:'Could not find contact'})
        }

        if(contact.user.toString() !==req.user.id){
            return res.status(401).json({msg:'You are not authorised'});
        }
        
        await Contact.findByIdAndRemove(req.params.id);
        
        res.json({msg:'Contact deleted'});

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Cant post contact')

        
    }

   
});


module.exports= router;
const express = require('express');
const connectDB = require('./config/db');


const App= express();

connectDB();

App.use(express.json({extended:false}));

App.get("/",(req,res ) => res.send('Hi'));

//Define routes

App.use('/api/users', require('./routes/users'));
App.use('/api/contacts', require('./routes/contacts'));
App.use('/api/auth', require('./routes/auth'));




const PORT=process.env.PORT || 5000;

App.listen(PORT ,()=> console.log(`server started at : ${PORT}`));

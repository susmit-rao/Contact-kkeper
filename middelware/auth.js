const jwt =require('jsonwebtoken');
const config=require('config');

module.exports = function(req,res,next){
    
    const token=req.header('x-auth-token');
    if(!token){
        res.status(401).json({msg:'You are not authorised to access this page'})
    }
    try {
        const decoded=jwt.verify(token,config.get('jwtSecret'));
        req.user=decoded.user;
        next();

        
    } catch (err) {
        console.error(err.message);
        res.status(401).send('token is not valid');
        
    }
} 
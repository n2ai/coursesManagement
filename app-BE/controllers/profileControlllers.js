const mysql = require("mysql2/promise");
const JWTActions = require("../middlewares/JWTActions");

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Luc!el123',
    database:'coursesMng_project',
    waitForConnections:true,
    connectionLimit:10,
    maxIdle:10,
    idleTimeout: 60000,
    queueLimit:0,
    enableKeepAlive:true,
    keepAliveInitialDelay:0
});

const profileControllers = {
    verifyUser:(req,res)=>{
        try{
            const token = req.cookies.token;
            const id = req.body.id;
            
            const decoded = JWTActions.verifyJWT(token);
            
            if(decoded.id === parseInt(id)){
                res.status(200).send('Verify Success')
            }else{
                throw(err)
            }
        }catch(err){
            res.status(400).send(err)
        }
        
    },
    getUserClasses: (req,res)=>{
        console.log(req.query)
    }
};

module.exports  = profileControllers;
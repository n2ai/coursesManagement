const bcrypt = require('bcrypt');
const salt = 10;
const mysql = require('mysql2/promise');

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

const registerRouters = {

    registering:async (req,res)=>{
        try{
            //Work on registering
            const {username,password,fullName,year } = req.body;
            const [row,fields] = await pool.query('SELECT username FROM Users WHERE username = ?',[username])
            console.log(row)

            //Finished to check available username
            
            bcrypt.hash(password,10,(err,hash)=>{
            //hash is the hased password
            //err is error that happen during the process 
            });
            
        }catch(err){
            console.log(err);
        }
        
    }
}

module.exports = registerRouters
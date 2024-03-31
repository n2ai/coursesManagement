const mysql = require('mysql2/promise')
const {createJWT} = require('../middlewares/JWTActions')
const bcrypt = require('bcrypt')
require('dotenv').config()

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

const loginControllers = {
    login:async (req,res)=>{
        try{
            const {username,password} = req.body;
            const [row,fields] = await pool.query(`SELECT Password,UserId FROM Users WHERE username = ?`,[username]);
            if(row.length === 0) throw("No user exist");
            
            //verify password
            let hashedPassword = row[0].Password;
            let userId = row[0].UserId;
            
            let verification = await bcrypt.compare(password,hashedPassword)

            if(!verification){
                res.status(400).send("Wrong login")
            }else{
                let payload = {
                    username:username,
                    id:userId,
                    expiresIn: process.env.JWT_EXPIRES_IN
                }

                let token = createJWT(payload);
                res.status(200).send({
                    id:userId,
                    username:username,
                    accessToken:token
                })

            }
        }catch(err){
            res.status(400).send(err)
        }
    }
};

module.exports = loginControllers;
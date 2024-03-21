const bcrypt = require('bcrypt');
const e = require('express');
require('dotenv').config()
const SALT = parseInt(process.env.BCRYPT_SALT)
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

const registerControllers = {

    registering:async (req,res)=>{
        try{
            //Work on registering
            const {username,password,fullName,year } = req.body;
            const [row,fields] = await pool.query('SELECT username FROM Users WHERE username = ?',[username])
            if(row.length === 0){
                bcrypt.hash(password,SALT,async (err,hash)=>{
                    //hash is the hased password
                    //err is error that happen during the process 
                    const [row,fields] = await pool.query('INSERT INTO Users (username,password,fullname,year_of_college) VALUES (?,?,?,?)',
                    [username,hash,fullName,year]);
                });
                res.status(200).send('Success')
            }else{
                res.status(500).send('Please choose another username');
            }
        }catch(err){
            res.status(500).send(err)
        }
        
    }
}

module.exports = registerControllers
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
    verifyUser: async (req,res)=>{
        const token = req.cookies.token;
        const id = req.params.id;
        const decoded = JWTActions.verifyJWT(token);
        
        if(decoded.id !== parseInt(id)){
            res.status(400).send("Cannot write access token");
        };
       
        try{
            const [rows,fields] = await pool.execute(`SELECT 
            (SELECT ClassName FROM Classes WHERE ClassId = (SELECT ClassId FROM Enrollments WHERE UserId = ?)) AS ClassName, 
            ClassId, ClassCondition, EnrollmentDate FROM Enrollments WHERE UserId = ?`,[id,id]);
            res.status(200).send(rows)
        }catch(err){
            res.status(500).send(err)
        };    
    },
    fetchClasses: async (req,res)=>{

        let id = req.params.id
        try{
            //query class that student is attend
            const [classesTakenQueried] = await pool.execute(`SELECT ClassId FROM Enrollments WHERE UserId = ?`,[id]);
            const classTaken = classesTakenQueried.map(item=>item.ClassId)
            const [classCatalouge] =  await pool.execute(`SELECT ClassId, ClassName, Instructor, Room, Credit FROM Classes WHERE ClassId NOT IN (?)`,[classTaken])
        
            res.status(200).send(classCatalouge)
            
        }catch(err){
            res.status(500).send(err)
        };
    }
};

module.exports  = profileControllers;
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
require('dotenv').config()
const corsOptions = {
    origin:['http://localhost:5173'],
    credentials:true,
    methods:['GET','POST','PUT','DELETE','OPTIONS'],
}

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors(corsOptions))

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('Receive')
})

app.listen(3000,()=>{
    console.log(`Server is listening at port 3000`)
})
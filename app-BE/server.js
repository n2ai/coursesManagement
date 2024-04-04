const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const loginRouters = require('./routers/loginRouters');
const registerRouters = require('./routers/registerRouters');
const profileRouters = require('./routers/profileRouters')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const corsOptions = {
    origin:['http://localhost:5173'],
    credentials:true,
    methods:['GET','POST','PUT','DELETE','OPTIONS'],
};
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors(corsOptions));

//Routing for /
app.use('/',loginRouters);

//Routing for /register
app.use('/register',registerRouters);

//Routing for /profile
app.use('/profile',profileRouters);

app.listen(PORT,()=>{
    console.log(`Server is listening at port ${3000}`)
});
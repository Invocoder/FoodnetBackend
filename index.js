const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("express");
const morgan = require("morgan");

const postRoute = require("./routes/posts");



dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(function(db){
    // console.log(db);
    console.log('Database connected');
})
.catch(function(err)
{
    console.log(err);
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/posts", postRoute);


// app.get("/", (req, res)=>{
//     res.send("Welcome to Fodnet");
// })

// app.get("/users", (req, res)=>{
//     res.send("Welcome User");
// })



app.listen(3000, ()=>{
    console.log("Backend server is running");
})
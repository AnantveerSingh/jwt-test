const express=require("express");
const mongoose = require("mongoose");
const app=express();
const cookieParser = require('cookie-parser');
const routes=require("./routes")
app.use(routes)
app.use(express.json());
app.use(cookieParser());
const dbURI = "mongodb+srv://anant:anant@cluster0.ezbgl.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI)
  .catch((err) => console.log(err));

app.listen("80",()=>{
    console.log("up")
})
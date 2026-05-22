const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const port=process.env.port
const app = express();

mongoose
  .connect(
    process.env.mongo_url
  )
  .then(() => {
    console.log("MongoDB connected");

    app.listen(port, () => {
      console.log(`server is running port number ${port}`);
    });
  })
  .catch((e) => {
    console.log("MongoDB Error:", e);
  });

app.get("/", (req, res) => {
  res.send("API Working");
});

app.post("/login",(req,res)=>{
  const userdata=req.body;
  console.log(userdata);
  res.json({
    message:"user login succesfully",
    userdata
  })
})
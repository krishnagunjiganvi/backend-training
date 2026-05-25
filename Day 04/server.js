const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Notebook = require("./model/notes");

const {createAccount,login}=require("./controllers/user")
const {createNotebook,getNotes,updateNotebook,deleteNotebook}=require("./controllers/notes")

require("dotenv").config();
const port=process.env.port
app.use(express.json());

app.post("/signin",createAccount);
app.post("/CreateNotebook",createNotebook);
app.get("/allnotebooks",getNotes)
app.post("/login",login);
app.put("/update/:id",updateNotebook)
app.delete("/api/delete-note/:id", deleteNotebook);
// app.delete('/api/delete-note/:id', async (req, res) => {
//     const noteId = req.params.id;
//     // Add your database deletion logic here
//      console.log(noteId);
//       const notebook=await Notebook.findByIdAndDelete(noteId);
//       if(!notebook){
//         return res.send("Notebook not found");
//       }
    
//       res.send("Notes is deleted");
// });

mongoose.connect(process.env.mongo_url)
.then(()=>{
    app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})    
    console.log("database is connected")})
.catch((e)=>{
    console.log("something went wrong",e)});
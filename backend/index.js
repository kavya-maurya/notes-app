const express= require ("express");
const mongoose = require("mongoose");

const noteRoute= require("./routes/note.route")

const app=express();
app.use(express.json());



mongoose.connect(
"mongodb://admin:admin@ac-xxh8qed-shard-00-00.7pulazq.mongodb.net:27017,ac-xxh8qed-shard-00-01.7pulazq.mongodb.net:27017,ac-xxh8qed-shard-00-02.7pulazq.mongodb.net:27017/?ssl=true&replicaSet=atlas-9m1zsk-shard-0&authSource=admin&appName=Cluster0",
  
).then( ()=>{
        console.log("start writing your notes!");
}).catch(   (err)=>{
        console.log(err);
});

app.use("/app/student", noteRoute);

app.listen(3000, ()=>{
    console.log("connected to server successfully!!")

})
const express= require ("express");

const router=express.Router();
const User = require("../models/note.models")

router.get("/note", async (req,res)=>{
    const user= await User.find();
    res.status(200).json(user);
});


router.post("/note", async (req,res)=>{
    const user= await User.create(req.body);
    res.status(200).json({message:user});
});

router.put("/note/:id", async (req,res)=>{
   const users = await User.findByIdAndUpdate(req.params.id,req.body );
res.status(200).json({ message: "Changes made." });

});

router.delete("/note/:id", async (req,res)=>{
 const users = await User.findByIdAndDelete(req.params.id,req.body );
res.status(200).json({ message: "Changes made." });
});

module.exports = router;
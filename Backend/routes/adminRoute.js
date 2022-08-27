const router = require("express").Router();
const Admin = require("../models/Org");

router.post("/add-new-ngo", async (req, res) => {
    try { 
      const newNgo = new Admin(req.body);
      const ngo = await newNgo.save();
      res.status(200).json(ngo);
    res.send("hello world")
    } catch (err) {
      console.log("error", err);
      res.status(500).json(err);
    }
  });

  router.get('/get-all-ngos', async(req,res) => {
    try{
      const ngoData = await Admin.find()
      res.status(200).json(ngoData)
    }
    catch(err){
      res.status(500).json(err)
    }
  })

  router.put('/update-verification-status', async (req,res) => {
    try {

    }
    catch(err){
        console.log("Error occured while updating the status",err)
        res.status(500).json(err)
    }
  })
  

  module.exports = router;
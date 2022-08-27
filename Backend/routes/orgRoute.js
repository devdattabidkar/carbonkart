const router = require("express").Router();
const Org = require("../models/Org");

router.post("/add-new-org", async (req, res) => {
    try { 
      const newOrg = new Org(req.body);
      const org = await newOrg.save();
      res.status(200).json(ngo);
    } catch (err) {
      console.log("error", err);
      res.status(500).json(err);
    }
  });

  module.exports = router;
const router = require("express").Router();
const Nft = require("../models/nft");
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, './uploads');
    },
    filename: function (req, file, cb) {
       cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
 });

var upload = multer({ storage: storage }).single('image');

router.post("/add-new-nft", upload,async (req, res) => {
    try { 
        const nftData = new Nft({
            nftId: req.body.nftId,
            nftName: req.body.nftName,
            nftImage: req.file.path,
            proofOfWork: req.file.path
        })
        const nftDetails = await nftData.save();
        res.status(200).json(nftDetails)
        // return res.send({ message: 'File uploaded successfully.', file });
    } catch (err) {
      console.log("error", err);
      res.status(500).json(err);
    }
  });

  module.exports = router;
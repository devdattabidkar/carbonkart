const mongoose = require("mongoose");

const NftSchema = new mongoose.Schema(
    {
        nftId: {
            type: String,
            required: true,
            unique: true
        },
        nftName: {
            type: String,
            required: true,
        },
        nftImage: {
            type: String,
            required: true,
        },
        proofOfWork: {
            type: String,
            required: true, 
        },
    },
    { timestamps: true },
    { collection: 'nft' }
);

module.exports = mongoose.model("nft", NftSchema);
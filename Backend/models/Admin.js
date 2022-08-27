const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
    {
        ngoId: {
            type: String,
            required: true,
            unique: true
        },
        ngoName: {
            type: String,
            required: true,
        },
        nftId: {
            type: String,
            required: true,
        },
        verificationStatus: {
            type: Boolean,
            required: true,
            default: false
        },
        ccValue:{
            type: Number,
            default:0
        }

    },
    { timestamps: true },
    { collection: 'admin' }
);

module.exports = mongoose.model("admin", AdminSchema);
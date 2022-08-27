const mongoose = require("mongoose");

const OrganizationSchema = new mongoose.Schema(
    {
        orgId: {
            type: String,
            required: true,
            unique: true
        },
        orgName: {
            type: String,
            required: true,
        },
        orgType: {
            type: String,
            required: true,
        },
        orgBio: {
            type: String,
            required: true,
        },
        orgValidAddress: {
            type: String,
            required: true
        }
    },
    { timestamps: true },
    { collection: 'org' }
);

module.exports = mongoose.model("org", OrganizationSchema);
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const adminRoute = require("./routes/adminRoute");
const orgRoute = require("./routes/orgRoute");



dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(console.log("connected to server"))
  .catch((err) => console.log(err));

app.use("/api/admin", adminRoute);
app.use("/api/org", orgRoute);

app.get('/',(req,res) =>{
  res.send("Welcome to carboncart: a revolution to web 3")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("The Mongo URL", process.env.MONGO_URL)
  console.log("Backend is running.");
});
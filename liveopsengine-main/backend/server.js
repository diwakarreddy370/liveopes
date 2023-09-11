const express = require('express');
const mongoose = require("mongoose");
const bodyparser = require('body-parser')
const cors = require("cors")
const app = express();
const SERVER_PORT = process.env.PORT || 8080 

require("./models/player")
require("./models/offer")
app.use(cors())
// app.use(bodyparser.json());
app.use(express.json());

app.use(require("./routes/login"))
app.use(require("./routes/gameoffer"))




mongoose.connect("mongodb+srv://diwakarreddykondammagari:reddy123@cluster0.7e5lzvv.mongodb.net/").then(()=>{
    console.log("successfully connected to db")
}).catch(()=>console.log("Failed to connect to db"))

// require("./schemas/user-schema")
// require("./schemas/offer-schema")

app.listen(SERVER_PORT,()=>{
    console.log("server started at"+ " " +SERVER_PORT)
})

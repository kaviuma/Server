let mongoose = require("mongoose");

let CS = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
type:String
    },
    message:{
        type:String
    }
})


module.exports = mongoose.model("contactus",cs)
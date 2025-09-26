var mongoose = require("mongoose")
var bookSchema = new mongoose.Schema({
    Title : String,
    Author : String,
    Price : Number,
    IsActive : Boolean
})
module.exports= mongoose.model("books",bookSchema)
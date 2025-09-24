var mongoose = require("mongoose")
var bookSchema = new mongoose.Schema({
    Title : String,
    Price : Number,
    Author : String,
    isActive : Boolean
})
var mybook = mongoose.model("book",bookSchema)
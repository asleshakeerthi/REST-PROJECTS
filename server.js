require ("dotenv").config()
var express = require("express")
var connectToDatabase = require("./database/db")
var bookRoute = require("./routes/book-routes")
connectToDatabase()
var app = express()
app.use(express.json())
app.use("api/books",bookRoute)

var PORT = process.env.PORT||9000
app.listen(PORT,()=>{
    console.log("The server is running")
})
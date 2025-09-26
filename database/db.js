var mongoose = require("mongoose")
async function connectToDatabase() {
    try{
        await mongoose.connect("mongodb+srv://aslesha:aslesha@project2.nrrko6k.mongodb.net/")
        console.log("connected to the database")
    }catch(error){
        console.log("error",error);
}
}
module.exports = connectToDatabase
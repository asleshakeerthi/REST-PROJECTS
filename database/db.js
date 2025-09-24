var mongoose = require("mongoose")
async function connectToDatabase() {
    try{
        await mongoose.connect("mongodb+srv://harshitharcp09:harshitharcp09@cluster2.antx24r.mongodb.net/")
        console.log("connected")

    }catch(error){
        console.log("error",error);
    
}
}
module.exports = connectToDatabase
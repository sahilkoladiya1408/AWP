const  mongoose = require("mongoose")
const DB = "mongodb://127.0.0.1:27017/User"

mongoose.connect(DB)
.then(() => {
    console.log("Connection succesful");
})
.catch((e)=>{
    console.log(e);
})
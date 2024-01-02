const { default: mongoose } = require("mongoose")

const ConnectDB = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/todos-nextjs").
    then(()=> console.info("Connect to database")).
    catch((e) => console.error("Error to connect db ",e))
}

export default ConnectDB;
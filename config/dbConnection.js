const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('Database connected!!\nHost name : ',connect.connection.host,'\nDatabase name : ',connect.connection.name);
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}


module.exports =connectDB
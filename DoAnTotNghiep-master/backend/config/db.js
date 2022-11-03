import mongoose from 'mongoose';
//kết nối cơ sở dữ liệu
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true,
        })
        console.log(`MongoDC connect:${conn.connection.host}`);
    }catch(error){
        console.error(`Error:${error.message}`)
        process.exit(1)
    }
}

export default connectDB
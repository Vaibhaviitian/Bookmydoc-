import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Database Connected"))
    // console.log("Connecting to database...", process.env.MONGODB_URI);
    await mongoose.connect(`mongodb+srv://devil:devil123@vaibhavspr.ct1hg.mongodb.net/check`)

}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.
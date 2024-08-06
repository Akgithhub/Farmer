import mongoose from "mongoose";

const dbConnect = async (url) => {
  try {
    const connect = await mongoose.connect(url);
    if (connect) {
      console.log("Database connected successfully");
    }
  } catch (error) {
    console.log(`Error while connecting to database ${error}`);
  }
};
export default dbConnect;

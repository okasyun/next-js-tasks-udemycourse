import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://okashun:gensokyo0326@cluster0.nin781g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("succecc mongoDB");
  } catch (err) {
    console.error(err);
    console.log("Failure:Unconnected to MongoDB");
    throw new Error();
  }
};

export default connectDB;

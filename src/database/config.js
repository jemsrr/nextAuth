import mongoose from "mongoose";

const connection = async () => {
  try {
    mongoose.connect(process.env.CONNECTION_STR, { useUnifiedTopology: true });
    console.log("database connected sucessfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default connection;

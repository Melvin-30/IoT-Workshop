const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database Connected!");
  } catch (error) {
    console.log("Error Connecting DB: ", error);
  }
};

module.exports = connectDB;

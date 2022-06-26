module.exports = () => {
  const mongoose = require("mongoose");
  require("dotenv").config();
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("cant connect to db");
    console.log(error.message);
  }
};

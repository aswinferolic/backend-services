const mongoose = require('mongoose');
class mongoDb {}

mongoDb.connectDB = async () => {
  try {
    await mongoose.connect(process?.env?.MONGO_URI);
    console.log(`Mongodb connected successfully`);
  } catch (error) {
    console.log(`Error connecting mongodb: ${error}`);
  }
};

module.exports = mongoDb;

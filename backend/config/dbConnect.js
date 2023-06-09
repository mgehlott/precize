const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const result = await mongoose.connect(process.env.MONGO_URI);
    console.log(`db connect at ${result.host}`);
  } catch (e) {
    console.log("errrrrrrr", e);
  }
};

module.exports = dbConnect;

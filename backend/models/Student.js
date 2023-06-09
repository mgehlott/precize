const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    address: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    pincode: {
      type: String,
      require: true,
    },
    satscore: {
      type: String,
      require: true,
    },
    passed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const StudentModal = mongoose.model("Student", studentSchema);

module.exports = StudentModal;

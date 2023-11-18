const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const userSchema = new Schema(
  {
    userName: {
      type: String,
      index: true,
      trim: true,
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    emailId: {
      type: String,
      index: true,
      trim: true,
    },
    profilePicPath: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
      default: 'ACTIVE',
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model('user', userSchema);

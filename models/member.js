const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  linkedin: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Member = new mongoose.model("Member", memberSchema);

module.exports = Member;

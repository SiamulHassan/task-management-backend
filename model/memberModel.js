const mongoose = require("mongoose");
const memberSchema = new mongoose.Schema({
  memberName: {
    type: String,
  },
  email: {
    type: String,
  },
});
const Member = mongoose.model("Member", memberSchema);
module.exports = Member;

const Member = require("../model/memberModel");

const getMembersController = async (req, res) => {
  const members = await Member.find();
  res.status(200).json({
    members,
  });
};
module.exports = getMembersController;

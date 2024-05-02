const Member = require("../model/memberModel");
const membersController = async (req, res) => {
  try {
    const { memberName, email } = req.body;

    if (memberName && email) {
      const memberData = await Member.create({ memberName, email });
      console.log("member data:", memberData);
      res.status(200).json({
        members: memberData,
      });
    } else {
      throw new Error("Information required");
    }
    //{ memberName: 'siamul a', email: 'dash@gmail.com' }
  } catch (error) {
    console.log("member:", error.message);
    res.send(error.message);
  }
};

module.exports = membersController;

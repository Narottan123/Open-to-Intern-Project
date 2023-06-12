const { default: mongoose } = require("mongoose");
const internModel = require("../Model/internModel");
const internmodelcheck = async (req, res, next) => {
  try {
    let { name, email, mobile, collegeId } = req.body;
    if (!name) {
      return res.status(400).send({
        status: false,
        message: "Please provide name",
      });
    }

    //emailId validation*******************************
    if (!email) {
      return res.status(400).send({
        status: false,
        message: "Please provide email",
      });
    }
    email = email.toLowerCase();
    let emailexist = await internModel.findOne({ email: email });
    if (emailexist) {
      return res.status(400).json({ message: "email id should be unique" });
    }
    const emailRegex =
      /^[a-zA-Z][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "email id format is invalid " });
    }

    //mobile number validation check

    if (!mobile) {
      return res.status(400).send({
        status: false,
        message: "Please provide mobile number",
      });
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      return res
        .status(400)
        .json({ message: "Mobile number should be 10 digits" });
    }
    let mobileNumber = await internModel.findOne({ mobile: mobile });
    if (mobileNumber) {
      return res
        .status(400)
        .json({ message: "Mobile number should be unique" });
    }

    //collegeId validation check
    if (!collegeId) {
      return res.status(400).send({
        status: false,
        message: "Please provide collegeId",
      });
    }
    if (!mongoose.Types.ObjectId.isValid(collegeId)) {
      return res.status(400).send({
        status: false,
        message: "Please provide valid college Id",
      });
    }
    next();
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports.internmodelcheck = internmodelcheck;

const collegeModel = require("../Model/collegeModel");
const internModel = require("../Model/internModel");

const createCollege = async (req, res) => {
  try {
    let data = req.body;
    let saveddata = await collegeModel.create(data);
    res.status(201).send({
      status: true,
      message: "College creeated successfully",
      saveddata,
    });
  } catch (err) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const getCollegeDEtails = async (req, res) => {
  try {
    let collegeName = req.params.collegeName;
    let data = await collegeModel.findOne({ name: collegeName });
    if (!data) {
      return res
        .status(404)
        .send({ status: false, message: "collegename name not found" });
    }
    let saveddata = await internModel
      .find({ collegeId: data._id })
      .select({ _id: 1, name: 1, email: 1, mobile: 1 });
    if (!saveddata) {
      return res
        .status(404)
        .send({ status: false, message: "college id not found" });
    }
    let obj = {
      name: data.name,
      fullName: data.fullName,
      logoLink: data.logoLink,
      interns: saveddata,
    };
    res.status(200).send({ status: true, data: obj });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message })
  }
};
module.exports.createCollege = createCollege;
module.exports.getCollegeDEtails = getCollegeDEtails;

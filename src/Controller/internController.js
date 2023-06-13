const internModel = require("../Model/internModel");

const internCreate = async (req, res) => {
  try {
    let data = req.body;
    let internData = await internModel.create(data);
    res
      .status(201)
      .send({
        status: true,
        message: "intern created successfully",
        internData,
      });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message })
  }
};
module.exports.internCreate = internCreate;

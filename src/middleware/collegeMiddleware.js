const validUrl = require("valid-url");
const collegemodelcheck = (req, res, next) => {
  try {
    let { name, fullName, logoLink } = req.body;
    if (!name) {
      return res
        .status(400)
        .send({
          status: false,
          message: "Please provide college name in short form",
        });
    }
    if (!fullName) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide college name " });
    }
    if (!logoLink) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide logo " });
    }
    if (!validUrl.isUri(logoLink)) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide Valid Url " });
    }
    if (!logoLink.includes("//" && ("http" || "https"))) {
      return res
        .status(400)
        .send({
          status: false,
          message: "Please provide Valid Url it occurs syntax error ",
        });
    }

    next();
  } catch (err) {
    
    res.status(500).send({ status: false, message: err.message })
  }
};
module.exports.collegemodelcheck = collegemodelcheck;

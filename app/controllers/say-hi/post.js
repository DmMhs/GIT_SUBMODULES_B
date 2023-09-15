const { sayHiService } = require("../../services/say-hi");


module.exports = async (req, res, next) => {
  try {
    console.log(req.body);
    sayHiService.sayHi(req.body.name);

    res.send(200);
  } catch(err) {
    next(err);
  }
}
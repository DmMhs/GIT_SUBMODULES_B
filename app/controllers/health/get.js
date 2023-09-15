const packageJSON = require('../../../package.json');


module.exports = async (req, res, next) => {
  try {
    res.json(HealthService.get(packageJSON));
  } catch(err) {
    next(err);
  }
};
const { healthService } = require('../../../@cmbp/app-a/app/services/health');

const packageJSON = require('../../../package.json');

module.exports = async (req, res, next) => {
  try {
    res.json(healthService.get(packageJSON));
  } catch(err) {
    next(err);
  }
};
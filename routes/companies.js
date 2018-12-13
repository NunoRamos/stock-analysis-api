var express = require('express');
var router = express.Router();
const companiesMiddleware = require('../middleware/companies');

router.get('/daily-quote/:companiesList', companiesMiddleware.getCompaniesQuotes);

router.get('/monthly-stats/:companiesList',
  companiesMiddleware.getDailyCompaniesStats,
  companiesMiddleware.calculatePriceVariation);

module.exports = router;

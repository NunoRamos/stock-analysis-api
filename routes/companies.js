var express = require('express');
var router = express.Router();
const companiesMiddleware = require('../middleware/companies');

router.get('/daily-quote/:companies', companiesMiddleware.getCompaniesQuotes);

module.exports = router;

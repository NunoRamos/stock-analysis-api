const requestPromise = require('request-promise');

exports.getCompaniesQuotes = (req, res, next) => {
    let companies = req.params.companiesList;
    let companiesArray = JSON.parse(companies);

    const promiseCalls = [];
    let prices = [];

    for (index in companiesArray)
        promiseCalls.push(this.getCompanyQuote(companiesArray[index]))

    Promise.all(promiseCalls).then(results => {
        results.forEach(quote => {
            prices.push(quote);
        });
        return res.status(200).json(prices);
    });
};

exports.getCompanyQuote = companySymbol => new Promise(resolve => {
    requestPromise('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + companySymbol + '&apikey=0V27RLXB3DH4EYVO')
        .then(htmlString => {
           let json = JSON.parse(htmlString);
           return resolve(json['Global Quote']);
        })
        .catch(err => {
            return resolve({});
        });
});

exports.getDailyCompaniesStats = (req, res, next) => {
  let companies = req.params.companiesList;
  console.log({companies})
  let companiesArray = JSON.parse(companies);
  const promiseCalls = [];

  for (index in companiesArray)
      promiseCalls.push(this.getDailyCompanyStats(companiesArray[index]));

  return Promise.all(promiseCalls).then(results => {
    let companiesStats = [];
    results.forEach(quote => {
      companiesStats.push(quote);
    });
    return res.status(200).json(companiesStats);
  });
};

exports.getDailyCompanyStats = symbol => new Promise(resolve => {
  requestPromise('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&apikey=0V27RLXB3DH4EYVO')
      .then(htmlString => {
        let json = JSON.parse(htmlString);
        const stats = json["Time Series (Daily)"];
        return resolve({ symbol, stats: stats });
      })
      .catch(err => {
        console.log(err);
        return resolve({});
      });
});

exports.calculatePriceVariation = (req, res) => {
  
}

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

exports.getCompanyQuote = (companySymbol) => new Promise(resolve => {
    requestPromise('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + companySymbol + '&apikey=0V27RLXB3DH4EYVO')
        .then(function (htmlString) {
           let json = JSON.parse(htmlString);
           return resolve(json['Global Quote']);
        })
        .catch(function (err) {
            return resolve({});
        });
});
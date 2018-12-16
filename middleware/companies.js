const requestPromise = require('request-promise');
const data = require('../data/companyhistory');

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
           return (json['Global Quote'] == null ? resolve(this.returnDummyData(companySymbol)) :  resolve(json['Global Quote']));
        })
        .catch(err => {
            return resolve(this.returnDummyData(companySymbol));
        });
});

exports.returnDummyData = companySymbol => {
    let companyObj = {};
    switch (companySymbol) {
        case "MSFT":
            companyObj["01. symbol"] = "MSFT";
            companyObj["02. open"] = "108.2500";
            companyObj["03. high"] = "109.2600";
            companyObj["04. low"] = "105.5000";
            companyObj["05. price"] = "106.0300";
            companyObj["06. volume"] = "46892108";
            companyObj["07. latest trading day"] = "2018-12-14";
            companyObj["08. previous close"] = "109.4500";
            companyObj["09. change"] = "-3.4200";
            companyObj["10. change percent"] = "-3.1247%";
            break;
        case "AAPL":
            companyObj["01. symbol"] = "AAPL";
            companyObj["02. open"] = "169.0000";
            companyObj["03. high"] = "169.0800";
            companyObj["04. low"] = "165.2900";
            companyObj["05. price"] = "165.4800";
            companyObj["06. volume"] = 	"36730765";
            companyObj["07. latest trading day"] = 	"2018-12-14";
            companyObj["08. previous close"] = "170.9500";
            companyObj["09. change"] = "-5.4700";
            companyObj["10. change percent"] = 	"-3.1998%";
            break;
        case "AMZN":
            companyObj["01. symbol"] = "AMZN";
            companyObj["02. open"] = "1638.0000";
            companyObj["03. high"] = "1642.5700";
            companyObj["04. low"] = "1585.1200";
            companyObj["05. price"] = "1591.9100";
            companyObj["06. volume"] = "5773092";
            companyObj["07. latest trading day"] = "2018-12-14";
            companyObj["08. previous close"] = "1658.3800";
            companyObj["09. change"] = "-66.4700";
            companyObj["10. change percent"] = "-4.0081%";
            break;
        case "GOOGL":
            companyObj["01. symbol"] = "GOOGL";
            companyObj["02. open"] = "1060.0200";
            companyObj["03. high"] = "1071.7200";
            companyObj["04. low"] = "1049.5400";
            companyObj["05. price"] = "1051.7100";
            companyObj["06. volume"] = "1815584";
            companyObj["07. latest trading day"] = "2018-12-14";
            companyObj["08. previous close"] = "1073.5400";
            companyObj["09. change"] = "-21.8301";
            companyObj["10. change percent"] = "-2.0335%";
            break;
        case "GOOG":
            companyObj["01. symbol"] = "GOOG";
            companyObj["02. open"] = "1049.9800";
            companyObj["03. high"] = "1062.6000";
            companyObj["04. low"] = "1040.7900";
            companyObj["05. price"] = "1042.1000";
            companyObj["06. volume"] = "1683849";
            companyObj["07. latest trading day"] = "2018-12-14";
            companyObj["08. previous close"] = "1061.9000";
            companyObj["09. change"] = "-19.8000";
            companyObj["10. change percent"] = "-1.8646%";
            break;
        case "FB":
            companyObj["01. symbol"] = "FB";
            companyObj["02. open"] = "143.3400";
            companyObj["03. high"] = "146.0100";
            companyObj["04. low"] = "142.5100";
            companyObj["05. price"] = "144.0600";
            companyObj["06. volume"] = "21754465";
            companyObj["07. latest trading day"] = "2018-12-14";
            companyObj["08. previous close"] = "145.0100";
            companyObj["09. change"] = "-0.9500";
            companyObj["10. change percent"] = "-0.6551%";
            break;
        case "INTC":
            companyObj["01. symbol"] = "INTC";
            companyObj["02. open"] = "47.8900";
            companyObj["03. high"] = "48.7600";
            companyObj["04. low"] = "47.8500";
            companyObj["05. price"] = "47.8600";
            companyObj["06. volume"] = "19015848";
            companyObj["07. latest trading day"] = "2018-12-14";
            companyObj["08. previous close"] = "48.2900";
            companyObj["09. change"] = "-0.4300";
            companyObj["10. change percent"] = "-0.8905%";
            break;
        case "CSCO":
            companyObj["01. symbol"] = "CSCO";
            companyObj["02. open"] = "46.3700";
            companyObj["03. high"] = "46.6150";
            companyObj["04. low"] = "45.6400";
            companyObj["05. price"] = "45.8200";
            companyObj["06. volume"] = "26415514";
            companyObj["07. latest trading day"] = "2018-12-14";
            companyObj["08. previous close"] = "47.4700";
            companyObj["09. change"] = "-1.6500";
            companyObj["10. change percent"] = "-3.4759%";
            break;
        case "CMCSA":
            companyObj["01. symbol"] = "CMCSA";
            companyObj["02. open"] = "36.3900";
            companyObj["03. high"] = "36.8500";
            companyObj["04. low"] = "36.1900";
            companyObj["05. price"] = "36.3400";
            companyObj["06. volume"] = "13233114";
            companyObj["07. latest trading day"] = "2018-12-14";
            companyObj["08. previous close"] = "36.7600";
            companyObj["09. change"] = "-0.4200";
            companyObj["10. change percent"] = "-1.1425%";
            break;
        case "PEP":
            companyObj["01. symbol"] = "PEP";
            companyObj["02. open"] = "117.3200";
            companyObj["03. high"] = "117.5500";
            companyObj["04. low"] = "113.6700";
            companyObj["05. price"] = "113.9500";
            companyObj["06. volume"] = "7394649";
            companyObj["07. latest trading day"] = "2018-12-14";
            companyObj["08. previous close"] = "118.3500";
            companyObj["09. change"] = "-4.4000";
            companyObj["10. change percent"] = "-3.7178%";
            break;
    }
    return companyObj;
};

exports.getDailyCompaniesStats = (req, res, next) => {
  let companies = req.params.companiesList;
  console.log({companies})
  let companiesArray = JSON.parse(companies);
  console.log({companiesArray});
  const promiseCalls = [];

  for (index in companiesArray)
      promiseCalls.push(this.getDailyCompanyStats(companiesArray[index]));

  return Promise.all(promiseCalls).then(results => {
    let companiesStats = [];
    results.forEach(quote => {
      companiesStats.push(quote);
    });
    req.companiesStats = companiesStats;
    return next();
  });
};
// W0EMXNK77PYK3OPY
// WBYIY219EMNOZB92
exports.getDailyCompanyStats = symbol => new Promise(resolve => {
  requestPromise('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&apikey=W0EMXNK77PYK3OPY')
      .then(htmlString => {
        let json = JSON.parse(htmlString);
        console.log({json});
        if(json['Note'] != null)
          return resolve(data.companyHistory)
        const stats = json["Time Series (Daily)"];
        console.log({ stats });


        return resolve({ symbol, stats: stats });
      })
      .catch(err => {
        console.log('DEU ERRO');
        console.log(err);
        return resolve({});
      });
});

exports.calculatePriceVariation = (req, res) => {
  const companiesStats = req.companiesStats;
  console.log('ESTOU AQUI');

  for(companieStats of companiesStats){
    console.log('Entrei aqui');
    const stats = companieStats.stats;
    console.log({ stats });
    const days = Object.keys(stats);
    const numberOfdays = days.length;
    const priceVariations = [];

    console.log('Vou calcular preços');
    for(var i = numberOfdays - 1; i >= 0; i = i -2){
      const dayOne = days[i], dayTwo = days[i - 1];
      const dayOneStats = stats[dayOne], dayOneClose = Number(dayOneStats['4. close']);
      const dayTwoStats = stats[dayTwo], dayTwoClose = Number(dayTwoStats['4. close']);
      const priceVariation = (dayTwoClose - dayOneClose) / dayTwoClose;
      priceVariations.push(priceVariation);
    }
    companieStats.closePriceVariations = priceVariations;;
  }
  return res.status(200).json(companiesStats);
}

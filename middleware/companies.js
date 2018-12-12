exports.getCompaniesQuotes = (req, res, next) => {
    let companies = req.params.companies;
    console.log("Params: " + req.params);
    console.log("Companies: " + companies);
    /*companies.forEach(element => {
        console.log(element);
    });*/
    let companiesArray = JSON.parse(companies);
    
    return res.status(200).json(companies);
};
const data = require('../db/data.json');

const getQuotes = (req, res) => {
    let result;

    if(req.params.id === "all") {
        result = data.quotes;
    } else {
        result = data.quotes.filter((item) => item.id === parseInt(req.params.id));
    }

    res.status(200).json({
        status: 'Success',
        data: result
    })
}


module.exports = {
    getQuotes
}
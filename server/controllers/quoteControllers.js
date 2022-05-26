const data = require('../db/data.json');
const {sequelize, quote} = require('../models');

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


const createQuote = async (req, res) => {
    try {
        const {name, address, content, memo, createdAt, updatedAt} = req.body;
        const data = await quote.create({name, address, content, memo, createdAt, updatedAt});
        return res.json(data);
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = {
    getQuotes,
    createQuote
}
const {sequelize, quote} = require('../models');
const { Op } = require('sequelize')

// fetch all quotes
const getAllQuotes = async (req, res) => {
    try {
        const data = await quote.findAll({
            attributes: ['name', 'address', 'content', 'memo', 'updatedAt']
        });
       
        return res.status(200).json({
            status: 'success',
            data
        });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

// fetch one quote
const getSingleQuote = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await quote.findOne({
            attributes: ['id', 'name', 'address', 'content', 'memo', 'updatedAt'],
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        });

        return res.status(200).json({
            status: 'success',
            data
        });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

// Create quote
const createQuote = async (req, res) => {
    const { name, address, content, memo } = req.body;
    const createdAt = new Date();
    const updatedAt = new Date();
    try {
        const data = await quote.create({name, address, content, memo, createdAt, updatedAt});
        return res.json(data);
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = {
    getAllQuotes,
    createQuote,
    getSingleQuote
}
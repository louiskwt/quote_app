const {sequelize, quote} = require('../models');
const { Op } = require('sequelize')

// fetch all quotes
const getAllQuotes = async (req, res) => {
    try {
        const data = await quote.findAll({
            attributes: ['id', 'name', 'address', 'contents', 'memo', 'updatedAt']
        });
       
        return res.status(200).json({
            message: 'authenticated',
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
            attributes: ['id', 'name', 'address', 'contents', 'memo', 'updatedAt'],
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
    const { name, address, contents, memo } = req.body;
    const createdAt = new Date();
    const updatedAt = new Date();
    try {
        const data = await quote.create({name, address, contents, memo, createdAt, updatedAt});
        return res.json(data);
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

// Delete Quote
const deleteQuote = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await quote.destroy({
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

// update quote
const updateQuote = async (req, res) => {
    const id = req.params.id;

    const { name, address, contents, memo } = req.body;
    const updatedAt = new Date();

    try {
        const data = await quote.update({name, address, contents, memo, updatedAt}, {
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

// find by query
const findClient = async (req, res) => {
    const query = req.params.query;
    try {
        const data = await quote.findAll({ where: { name: query } });
        res.status(200).json({
            status: 'success',
            data
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {
    getAllQuotes,
    createQuote,
    getSingleQuote,
    deleteQuote,
    updateQuote,
    findClient
}
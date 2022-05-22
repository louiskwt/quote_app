
const getAllQuotes = (req, res) => {
    res.status(200).json({
        status: 'Success',
        data: []
    })
}

const getOneQuote = (req, res) => {
    res.status(200).json({
        status: 'Success',
        data: []
    })
}

module.exports = {
    getAllQuotes,
    getOneQuote
}
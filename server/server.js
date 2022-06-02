require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { sequelize } = require('./models');

// bring in the routes
const quoteRoutes = require('./routes/quoteRoutes');

// create express app
const app = express();

// Middlewares

// logger
app.use(morgan('dev'));

// enable cors
app.use(cors());

app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extend: true }));

// api routes
app.use('/api/v1/quotes', quoteRoutes)

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
})


const db = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established');
    } catch (error) {
        console.log('Unable to conntect', error)
    }
}

db();
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { sequelize } = require("./models");

// bring in the routes
const quoteRoutes = require("./routes/quoteRoutes");
const userRoutes = require("./routes/userRoutes");

// create express app
const app = express();

// Middlewares

// logger
app.use(morgan("dev"));

// enable cors
app.use(cors());

app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

// api routes
app.use("/api/v1/quotes", quoteRoutes);

app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});

const db = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established");
  } catch (error) {
    console.log("Unable to conntect", error);
  }
};

db();

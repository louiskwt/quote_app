require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: process.env.DB_PASSWORD,
    database: "quotes_app",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "ubuntu",
    password: process.env.DB_PASSWORD,
    database: "quotes_app",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};

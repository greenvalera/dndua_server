require('dotenv').config();
//TODO: remove passwords from git
module.exports = {
  "development": {
    "username": process.env.DB_USER_LOCAL,
    "password": process.env.DB_PASSWORD_LOCAL,
    "database": process.env.DB_DATABASE_LOCAL,
    "host": process.env.DB_HOST_LOCAL,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  }
};

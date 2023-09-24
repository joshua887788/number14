
const { Sequelize } = require('sequelize');

// Database connection configuration
const sequelize = new Sequelize('database_development', 'root', 'Sammy7788!', {
    host: 'localhost', // or the host where your database server is running
    dialect: 'mysql', // specify the database dialect
    logging: console.log
});


// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    module.exports = sequelize;
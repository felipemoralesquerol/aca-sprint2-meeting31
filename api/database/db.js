require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASS, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql'
});

async function autenticacion() {
    try {
        await sequelize.authenticate();
        console.log('Conexión a MySQL satisfactoria.');
    } catch (error) {
        console.error('Error de conexión a MySQL. Error interno:', error);
    };
};

autenticacion();

module.exports = sequelize;

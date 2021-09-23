const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require('./../database/db');

const Producto = sequelize.define("productos", {
    codigo: DataTypes.TEXT,
    descripcion: {
        type: DataTypes.TEXT,
        defaultValue: '(a definir)'
    },
    costo: DataTypes.INTEGER,
    precio_venta: DataTypes.DECIMAL
});

(async () => {
    await sequelize.sync({ force: true });
})();

module.exports = Producto;
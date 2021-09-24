require('dotenv').config();

const client = require('../database/config');
const db = require('../database/db');
const Producto = require('./../models/producto');

exports.list = async function list(req, res, next) {
    client.get("productos", async (error, rep) => {
        if (error) {
            // hubo un error
            res.json(error);
        }
        if (rep) {
            res.json({ productos: rep })

        } else {
            //si no están, los busco en la base de datos
            const productos = await Producto.findAll()
            console.log('Consulta a la database:' + productos)
            client.set("productos", JSON.stringify(productos), 'EX', '600');

            res.json({ productos: productos })
        }
    });

};

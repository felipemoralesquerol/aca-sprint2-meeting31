require("dotenv").config();

const client = require("../database/config");
const db = require("../database/db");
const Producto = require("./../models/producto");

exports.list = async function list(req, res, next) {
  client.get("productos", async (error, rep) => {
    if (error) {
      // hubo un error
      res.json(error);
    }
    if (rep) {
      res.json({ productos: rep });
    } else {
      //si no están, los busco en la base de datos
      const productos = await Producto.findAll();
      console.log("Consulta a la database:" + productos);

      // Agregado de clave en redis
      client.set("productos", JSON.stringify(productos), "EX", "600");

      res.json({ productos: productos });
    }
  });
};

exports.cambiarPrecio = async function cambiarPrecio(req, res, next) {
  const producto = await Producto.findOne({ where: { id: req.body.id } });

  // Actualiza el pre
  producto.precio_venta = req.body.precio_venta;
  console.log(producto);
  producto.save();

  //Borrado de clave para que se recargue en nueva operacion que lo necesite
  client.del("productos");

  res.json({ producto });
};

exports.agregar = async function agregar(req, res, next) {
  const producto = await Producto.create(req.body);
  producto.save();

  //Borrado de clave para que se recargue en nueva operacion que lo necesite
  client.del("productos");

  res.json({ producto });
};

exports.borrar = async function borrar(req, res, next) {
  const producto = await Producto.destroy({ where: { id: req.params.id } });
  console.log(producto);

  //Borrado de clave para que se recargue en nueva operacion que lo necesite
  client.del("productos");

  res.json({ status: "ok" });
};

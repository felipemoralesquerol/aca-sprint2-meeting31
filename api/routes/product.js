const { Router } = require("express");
const router = Router();

const Controller = require("./../controllers/product");

router.get("/api/productos", Controller.list);

router.put("/api/productos/precio", Controller.cambiarPrecio);

router.post("/api/productos", Controller.agregar);

module.exports = router;

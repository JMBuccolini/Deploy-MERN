const { Router } = require("express");

const router = Router();

const {
  getProducts,
  postProducts,
  updateProducts,
  deleteProducts,
} = require("../controllers/productsControllers");

router.get("/", getProducts);

router.post("/", postProducts);

router.put("/:id", updateProducts);

router.delete("/:id", deleteProducts);

module.exports = router;

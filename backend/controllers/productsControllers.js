const Product = require('../models/product');

const getProducts = async (req, res) => {
  let products = await Product.find();

  res.status(200).json({
    products,
  });
};

const postProducts = async (req, res) => {
  const { name, price, stock } = req.body;

  let newProduct = new Product({ name, price, stock });

  await newProduct.save();

  res.status(200).json({
    msg: "Producto agregado con éxito",
    newProduct,
  });
};

const updateProducts = async (req, res) => {
  const { id } = req.params;

  const { name, price, stock } = req.body;

  let product = await Product.findByIdAndUpdate(id, {
    $set: { name: name, price: price, stock: stock },
  });

  res.status(200).json({
    msg: "Producto actualizado",
    product,
  });
};

const deleteProducts = async (req, res) => {
  const { id } = req.params;

  await Product.findByIdAndUpdate(id, { disponible: false });

  res.status(200).json({
    msg: "Producto borrado",
  });
};


module.exports = {getProducts, postProducts, updateProducts, deleteProducts}
const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

// GET => /admin
router.get("/products", adminController.getProducts);

// GET => /admin/add-product
router.get("/add-product", adminController.getAddProduct);
// POST => /admin/add-product
router.post("/add-product", adminController.postAddProduct);

// GET => /admin/edit-product
router.get("/edit-product/:prodId", adminController.getEditProduct);
// POST => /admin/edit-product
router.post("/edit-product", adminController.postEditProduct);

// GET => /admin/delete-product
router.post("/delete-product", adminController.postDeleteProduct);


module.exports = router;




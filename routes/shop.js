const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shop");

// GET => /
router.get("/", shopController.getIndex);

// GET => /product-list
router.get("/product-list", shopController.getProductsList);

// // GET => /shop/cart
router.get("/cart", shopController.getCart);
// POST => /shop/cart-add-item
router.post("/cart-add-item", shopController.postAddCart);

// POST => /shop/cart-deleete-item
router.post("/cart-delete-item", shopController.postDeleteFromCart);
// POST => /shop/cart-clear
router.post("/cart-clear", shopController.postClearCart);

// GET => /shop/product-detail
router.get("/product-details/:prodId", shopController.getProductDetails);

router.post("/order-create", shopController.postCreateOrder)


module.exports = router;




const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shop");

router.get("/product-list", shopController.getProductsList);

// GET => /shop/checkout
router.get("/checkout", shopController.getCheckout);

// GET => /shop/cart
router.get("/cart", shopController.getCart);

// GET => /shop/product-detail
router.get("/product-detail", shopController.getProductDetail);

// GET => /shop/
router.get("/", shopController.getIndex);


module.exports = router;




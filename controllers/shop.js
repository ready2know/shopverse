const Product = require("../models/Product");

module.exports.getProductsList = (req, res, next) => {
    Product.getProducts((products) => {
        res.render('shop/product-list', { pageTitle: "ShopVerse", products, hasProducts: products.length > 0 });
    })
}

module.exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout", { pageTitle: "Checkout" });
}

module.exports.getCart = (req, res, next) => {
    res.render("shop/cart", { pageTitle: "Cart" });
}

module.exports.getProductDetail = (req, res, next) => {
    res.render("shop/product-detail", { pageTitle: "Product Details" });
}

module.exports.getIndex = (req, res, next) => {
    Product.getProducts((products) => {
        res.render("shop/index", { pageTitle: "ShopVerse", products, hasProducts: products.length > 0 });
    })
};
const Product = require("../models/Product");

module.exports.getProducts = (req, res, next) => {

    Product.getProducts((products) => {
        res.render('shop', { pageTitle: "ShopVerse", products, hasProducts: products.length > 0 });
    })

}

module.exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {pageTitle:"Add Product"});
}
module.exports.postAddProduct = (req, res, next) => {
    let product = new Product(req.body.title, req.body.price, req.body.description);
    product.save();
    res.redirect("/");
}
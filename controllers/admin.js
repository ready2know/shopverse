const Product = require("../models/Product");

module.exports.getProducts = (req, res, next) => {
    Product.getProducts((products) => {
        res.render('admin/products', { pageTitle: "ShopVerse", products, hasProducts: products.length > 0 });
    })
}

module.exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', { pageTitle: "Add Product" });
}
module.exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const price = parseFloat(req.body.price);
    const description = req.body.description;
    const imageURL = req.body.imageURL;
    const product = new Product(title,proce,description,imageURL);
    product.save();
    res.redirect("/");
}

module.exports.getEditProduct = (req, res, next) => {
    res.render("admin/edit-product", {pageTitle: "Edit product"});
}
module.exports.postEditProduct = (req, res, next) => {
    res.render("admin/edit-product", {});
}

module.exports.getDeleteProduct = (req, res, next) => {
    res.render("admin/delete-product", {pageTitle: "Delete product", });
}
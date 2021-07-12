const Product = require("../models/Product");

module.exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("admin/products", {
        pageTitle: "[A} ShopVerse",
        products,
        hasProducts: products.length > 0,
      });
    })
    .catch((err) => console.error(err));
};

module.exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", { pageTitle: "Add Product" });
};
module.exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const price = parseFloat(req.body.price);
  const description = req.body.description;
  const imageURL = req.body.imageURL;
  const product = new Product({
    title: title,
    price: price,
    description: description,
    imageURL: imageURL,
    userId: "",
  });
  product
    .save()
    .then(() => {
      console.log("Product Saved...");
      res.redirect("/");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports.getEditProduct = (req, res, next) => {
  console.log(req.params);
  Product.findById(req.params.prodId)
    .then((product) => {
      res.render("admin/edit-product", {
        pageTitle: "Edit product",
        product: product,
      });
    })
    .catch((err) => console.log(err));
};
module.exports.postEditProduct = (req, res, next) => {
  Product.findById(req.body.prodId)
    .then((product) => {
      product.title = req.body.title;
      product.imageURL = req.body.imageURL;
      product.description = req.body.description;
      product.price = req.body.price;

      product
        .save()
        .then(() => {
          res.redirect("/admin/products");
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => console.log(err));
};

module.exports.postDeleteProduct = (req, res, next) => {
  Product.findByIdAndRemove(req.body.prodId)
    .then(() => {
      console.log(`Delete product`);
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

const Product = require("../models/Product");
const Order = require("../models/Order");


module.exports.getIndex = (req, res, next) => {
    Product.find()
        .then((products) => {
            res.render('shop/index', { pageTitle: "ShopVerse", products, hasProducts: products.length > 0 });
        })
        .catch(err => console.error(err));
};

module.exports.getProductsList = (req, res, next) => {
    Product.find()
        .then((products) => {
            res.render('shop/product-list', { pageTitle: "ShopVerse", products, hasProducts: products.length > 0 });
        })
        .catch(err => console.error(err));
};

// module.exports.getCheckout = (req, res, next) => {
//     res.render("shop/checkout", { pageTitle: "Checkout" });
// }

module.exports.getCart = (req, res, next) => {

    req.user
        .populate("cart.items.productId")
        .execPopulate()
        .then(user => {
            const products = user.cart.items;
            res.render('shop/cart', {
                path: '/cart',
                pageTitle: 'Your Cart',
                products: products,
            });
        })
        .catch(err => console.log(err));

}

module.exports.postAddCart = (req, res, next) => {

    const prodId = req.body.prodId;
    Product.findById(prodId)
        .then(product => {
            return req.user.addToCart(product);
        })
        .then(result => {
            console.log(result);
            res.redirect('/cart');
        });
};


module.exports.postDeleteFromCart = (req, res, next) => {
    const prodId = req.body.prodId;
    req.user.deleteFromCart(prodId)
        .then(result => {
            console.log(result);
            res.redirect('/cart');
        });
};

module.exports.postClearCart = (req, res, next) => {
    req.user.clearCart()
        .then(() => {
            res.redirect('/cart');
        });
};

module.exports.getProductDetails = (req, res, next) => {
    Product.findById(req.params.prodId).then(product => {
        res.render("shop/product-detail", { pageTitle: "Product Details", product: product });
    });
}

module.exports.postCreateOrder = (req, res, next) => {
    const order = new Order({ user: req.user._id, name: req.user.name, email: req.user.email, items: req.user.cart.items });
    return order.save().then(() => { req.user.clearCart(); }).then(() => { res.redirect("/"); });
};


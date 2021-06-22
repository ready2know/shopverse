module.exports.getProducts = (req, res, next) => {
    res.render('shop', {});
}

module.exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {});
}
module.exports.postAddProduct = (req, res, next) => {
    res.render('shop', {});
}
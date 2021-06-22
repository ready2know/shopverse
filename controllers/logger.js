module.exports.visitLogger = (req, res, next) => {
    console.log(`${req.url} ${req.method} ${JSON.stringify(req.body)}`);
    next();
}
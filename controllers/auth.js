module.exports.getLogin = (req, res, next) => {
  res.render("auth/login", { pageTitle: "Login" });
};
module.exports.postLogin = (req, res, next) => {};

module.exports.getRegister = (req, res, next) => {
  res.render("auth/register", { pageTitle: "Register" });
};
module.exports.postRegister = (req, res, next) => {};

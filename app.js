const MONGODB_URI =
  "mongodb+srv://r2k:!8frwFQL6zR!Adr@cluster0.wmvrf.mongodb.net/shop?retryWrites=true&w=majority";
const mongoose = require("mongoose");

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));

const loggerController = require("./controllers/logger");
app.use(loggerController.visitLogger);

const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

app.use(
  session({
    secret: "secret_code",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

const User = require("./models/User");
app.use((req, res, next) => {
  User.findById("60e44c3381ba932be01e8d13").then((user) => {
    req.user = user;
    next();
  });
});

const shopRouter = require("./routes/shop");
app.use("/", shopRouter);

const adminRouter = require("./routes/admin");
app.use("/admin", adminRouter);

const errorController = require("./controllers/error");
app.use("/", errorController.get404);

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000, () => {
      console.log(`Server listen on port 3000`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

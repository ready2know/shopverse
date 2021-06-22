const express = require('express');
const app = express();

const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

const shopRouter = require("./routes/shop");
app.use("/", shopRouter);

const adminRouter = require("./routes/admin");
app.use("/admin", adminRouter);




const errorController = require("./controllers/error");
app.use("/", errorController.get404);

app.listen(3000, () => {
    console.log(`Server listen on port 3000`);
});
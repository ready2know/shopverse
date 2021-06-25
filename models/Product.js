const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");
const dataFilePath = path.join(rootDir, "data", "products.txt");


class Product {
    constructor(title, price, desc, imageURL) {
        this.title = title;
        this.price = price;
        this.description = desc;
        if (!imageURL || imageURL.length == 0)
            this.image = "https://lh3.googleusercontent.com/proxy/mbTrCg4kvsZiDt1-SbuqM_KwDqqUdCGc_8okde9dlNZfOnTfnXbqp2INTCmEDUS_kBnc6YEsZ2RkT8DNT2hsqik6AHi_F2fijEAJajLxqd8T4Obi";
        else this.image = imageLink;
    }

    static getProducts(cb) {
        fs.readFile(dataFilePath, (err, data) => {
            if (!err) {
                let products = JSON.parse(data);
                cb(products);
            }
            else cb([]);
        });
    }

    save() {
        Product.getProducts((products) => {
            products.push(this);
            fs.writeFile(dataFilePath, JSON.stringify(products), (err) => {
                if (err) console.log(err);
            })
        })
    }

}

module.exports = Product;
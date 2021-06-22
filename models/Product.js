const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");
const dataFilePath = path.join(rootDir, "data", "products.txt");


class Product {
    constructor(title, price, desc) {
        this.title = title;
        this.price = price;
        this.desc = desc;
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
            products.push({ title: this.title, price: this.price, description: this.desc });
            fs.writeFile(dataFilePath, JSON.stringify(products), (err) => {
                if (err) console.log(err);
            })
        })
    }

}

module.exports = Product;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cart: {
        items: [{
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }]
    }
});

userSchema.methods.addToCart = function (product) {

    let cartProductIndex = this.cart.items.findIndex(cp => {
        return cp.productId.toString() === product._id.toString();
    });

    if (!~cartProductIndex) {
        this.cart.items.push({ productId: product._id, quantity: 1 });
    }
    else{
        this.cart.items[cartProductIndex].quantity++;
    }

    return this.save();
}

userSchema.methods.deleteFromCart = function (productId) {

    this.cart.items = this.cart.items.filter(item => item.productId.toString() !== productId.toString());
    return this.save();
}

userSchema.methods.clearCart = function (){
    this.cart.items = [];
    return this.save();
}


module.exports = mongoose.model("User", userSchema)
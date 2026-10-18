const {Schema} = require('mongoose');

const OrderSchema = new Schema({
    time:String,
    name:String,
    type:String,
    product:String,
    quantity:Number,
    price:Number,
    status:String
})

module.exports = { OrderSchema };

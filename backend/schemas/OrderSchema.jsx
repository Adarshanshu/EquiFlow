const {Schema} = require('mongoose');

const OrderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    time:String,
    name:String,
    type:String,
    product:String,
    quantity:Number,
    price:Number,
    status:String
})

module.exports = { OrderSchema };

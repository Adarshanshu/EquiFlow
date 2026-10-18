const {model} = require('mongoose');
const { OrderSchema } = require('../schemas/OrderSchema.jsx');

const OrdersModel = model('Order', OrderSchema);

module.exports = { OrdersModel };

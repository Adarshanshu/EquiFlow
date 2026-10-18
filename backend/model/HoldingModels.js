const {model} = require('mongoose');
const { HoldingSchema } = require('../schemas/HoldingSchema.jsx');

const HoldingsModel = model('Holding', HoldingSchema);

module.exports = { HoldingsModel };

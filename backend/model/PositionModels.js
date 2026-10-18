const {model} = require('mongoose');
const { PositionSchema } = require('../schemas/PositionSchema.jsx');

const PositionModel = model('Position', PositionSchema);

module.exports = { PositionModel };

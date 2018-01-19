const calculator = require('./calculators/calculator');
const Color = require('./models/Color');
const Density = require('./models/Density');
const Mass = require('./models/Mass');
const Temperature = require('./models/Temperature');
const Volume = require('./models/Volume');

exports.calculator = calculator;
exports.units = {
  Color,
  Density,
  Mass,
  Temperature,
  Volume,
};

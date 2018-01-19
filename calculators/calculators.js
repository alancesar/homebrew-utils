const abvCalculator = require('./abvCalculator');
const colorCalculator = require('./colorCalculator');
const expectedGravityCalculator = require('./expectedGravityCalculator');
const ibuCalculator = require('./ibuCalculator');
const refractometerCalculator = require('./refractometerCalculator');
const volumeCo2Calculator = require('./volumeCo2Calculator');

module.exports = {
  abv: input => abvCalculator(input),
  color: input => colorCalculator(input),
  expectedGravity: input => expectedGravityCalculator(input),
  ibu: input => ibuCalculator(input),
  refractometer: input => refractometerCalculator(input),
  volumeCo2: input => volumeCo2Calculator(input),
};

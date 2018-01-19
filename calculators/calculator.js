const abvCalculator = require('./abvCalculator');
const colorCalculator = require('./colorCalculator');
const expectedGravityCalculator = require('./expectedGravityCalculator');
const ibuCalculator = require('./ibuCalculator');
const refractometerCalculator = require('./refractometerCalculator');
const volumeCo2Calculator = require('./volumeCo2Calculator');

module.exports = {
  calculate: (calculator, input) => calculator(input),
  abv: abvCalculator,
  color: colorCalculator,
  expectedGravity: expectedGravityCalculator,
  ibu: ibuCalculator,
  refractometer: refractometerCalculator,
  volumeCo2: volumeCo2Calculator,
};

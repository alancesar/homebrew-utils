const { Color } = require('../units/units');

module.exports = ({ inputs, batchSize }) => {
  const mcu = inputs
    .map(input => (
      input.quantity.pounds.value * input.color.lovibond.value) / batchSize.gallons.value)
    .reduce((a, b) => a + b, 0);
  // eslint-disable-next-line no-restricted-properties
  const srm = 1.4922 * Math.pow(mcu, 0.6859);
  return new Color(srm);
};

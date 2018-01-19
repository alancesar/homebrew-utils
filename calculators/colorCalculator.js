const { Color } = require('../units/units');

module.exports = ({ inputs, batchSize }) => {
  const mcu = inputs.map((input) => {
    const x = ((input.srm + 0.76) / 1.3546) * (input.quantity.kilograms.value * 2.20462);
    const y = batchSize.volume.liters.value * 0.264172;
    return x / y;
  }).reduce((a, b) => a + b, 0);
  // eslint-disable-next-line no-restricted-properties
  const srm = 1.4922 * Math.pow(mcu, 0.6859);
  return new Color(srm);
};

const abvCalculator = require('./abvCalculator');
const { Density } = require('../units/units');

module.exports = ({
  inputs, wortCollected, batchSize, efficiency, attenuation,
}) => {
  const mashablePoints = inputs.filter(input => input.mashable)
    .map(input => input.ppg * input.quantity.pounds.value)
    .reduce((a, b) => a + b, 0);

  const notMashablePoints = inputs.filter(input => !input.mashable)
    .map(input => input.ppg * input.quantity.pounds.value)
    .reduce((a, b) => a + b, 0);

  const points = (mashablePoints * efficiency) + notMashablePoints;
  const preBoilOg = new Density(((points / wortCollected.gallons.value) * 0.001) + 1);
  const og = new Density(((points / batchSize.gallons.value) * 0.001) + 1);
  const fg = new Density(((og.sg.value - 1) * (1 - attenuation)) + 1);
  const { abv } = abvCalculator({ og, fg });

  return {
    preBoilOg,
    og,
    fg,
    abv,
  };
};

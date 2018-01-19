module.exports = ({
  inputs, batchSize, wortCollected, og,
}) => {
  const boilGravity = (batchSize.gallons.value / wortCollected.gallons.value) * (og - 1);

  return inputs.map((input) => {
    // eslint-disable-next-line no-restricted-properties
    const boilFactor = 1.65 * Math.pow(0.000125, boilGravity);
    // eslint-disable-next-line no-restricted-properties
    const timeFactor = (1 - Math.pow(Math.E, -(0.04 * input.boilTime))) / 4.15;
    return ((boilFactor * timeFactor) * 1.1) * (((input.alphaAcids) *
      input.quantity.ounces.value * 7490) / batchSize.gallons.value);
  }).reduce((a, b) => a + b);
};

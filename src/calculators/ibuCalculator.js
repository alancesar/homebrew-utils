export default ({
  inputs, batchSize, wortCollected, og,
}) => {
  const boilGravity = (batchSize.gallons.value / wortCollected.gallons.value) * (og.sg.value - 1);

  return inputs.map((input) => {
    const boilFactor = 1.65 * (0.000125 ** boilGravity);
    const timeFactor = (1 - (Math.E ** -(0.04 * input.boilTime))) / 4.15;
    return ((boilFactor * timeFactor) * 1.1) * (((input.alphaAcids) *
      input.quantity.ounces.value * 7490) / batchSize.gallons.value);
  }).reduce((a, b) => a + b);
};

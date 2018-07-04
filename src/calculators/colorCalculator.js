import { Color } from '../units/units';

export default ({ inputs, batchSize }) => {
  const mcu = inputs
    .map(input => (
      input.quantity.pounds.value * input.color.lovibond.value) / batchSize.gallons.value)
    .reduce((a, b) => a + b, 0);
  const srm = 1.4922 * (mcu ** 0.6859);
  return new Color(srm);
};

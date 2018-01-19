const units = require('./units/units');
const calculators = require('./calculators/calculators');

const { Color, Mass, Volume } = units;
const { color } = calculators;

const c = color({
  inputs: [
    {
      quantity: new Mass('2kg'),
      color: new Color(20),
    },
    {
      quantity: new Mass('500g'),
      color: new Color(50),
    },
  ],
  batchSize: new Volume(10),
});

console.log(c);

/* global describe, it */
const { expect } = require('chai');
const { calculate, expectedGravity } = require('./calculator');
const Mass = require('../models/Mass');
const Volume = require('../models/Volume');

const mock = {
  inputs: [
    {
      ppg: 37,
      quantity: new Mass('7kg'),
      mashable: true,
    },
    {
      ppg: 33,
      quantity: new Mass('700g'),
      mashable: true,
    },
    {
      ppg: 38,
      quantity: new Mass('6kg'),
      mashable: true,
    },
  ],
  wortCollected: new Volume('64l'),
  batchSize: new Volume('40l'),
  efficiency: 0.75,
  attenuation: 0.72,
};

describe('Expected Density Calculator', () => {
  it('OG, FG and ABV', () => {
    const result = calculate(expectedGravity, mock);
    expect(result.preBoilOg.sg.value).to.be.closeTo(1.050, 0.001);
    expect(result.og.sg.value).to.be.closeTo(1.080, 0.001);
    expect(result.fg.sg.value).to.be.closeTo(1.022, 0.001);
    expect(result.abv).to.be.closeTo(0.0754, 0.0001);
  });
});

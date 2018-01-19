/* global describe, it */
const { expect } = require('chai');
const { calculate, color } = require('./calculator');
const Mass = require('../models/Mass');
const Volume = require('../models/Volume');

const mock = {
  inputs: [
    {
      quantity: new Mass('4kg'),
      srm: 3,
    },
    {
      quantity: new Mass('4kg'),
      srm: 5,
    },
    {
      quantity: new Mass('2kg'),
      srm: 5,
    },
  ],
  batchSize: {
    volume: new Volume('40l'),
  },
};

describe('Color Calculator', () => {
  it('total SRM, EBC, ºL and Expected Color', () => {
    const expected = {
      ebc: {
        value: 11.86,
        symbol: 'EBC',
      },
      l: {
        value: 5.00,
        symbol: 'ºL',
      },
      srm: {
        value: 6.02,
        symbol: 'SRM',
      },
      hex: '#030403',
      rgb: [3, 4, 3],
    };

    const result = calculate(color, mock);
    expect(result.srm.value).to.be.closeTo(expected.srm.value, 0.01);
    expect(result.srm.symbol).to.be.equal(expected.srm.symbol);
    expect(result.ebc.value).to.be.closeTo(expected.ebc.value, 0.01);
    expect(result.ebc.symbol).to.be.equal(expected.ebc.symbol);
    expect(result.l.value).to.be.closeTo(expected.l.value, 0.01);
    expect(result.l.symbol).to.be.equal(expected.l.symbol);
    expect(result.hex).to.be.equal('#F8A600');
    expect(result.rgb).to.be.deep.equal([248, 166, 0]);
  });
});

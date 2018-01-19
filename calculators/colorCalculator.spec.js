/* global describe, it */
const { expect } = require('chai');
const { color } = require('./calculators');
const { Color, Mass, Volume } = require('../units/units');

const mock = {
  inputs: [
    {
      quantity: new Mass('4kg'),
      color: new Color(3),
    },
    {
      quantity: new Mass('4kg'),
      color: new Color(5),
    },
    {
      quantity: new Mass('2kg'),
      color: new Color(5),
    },
  ],
  batchSize: new Volume('40l'),
};

describe('Color Calculator', () => {
  it('total SRM, EBC, ºL and Expected Color', () => {
    const expected = {
      ebc: {
        value: 11.86,
        symbol: 'EBC',
      },
      lovibond: {
        value: 5.00,
        symbol: 'ºL',
      },
      srm: {
        value: 6.02,
        symbol: 'SRM',
      },
      hex: '#F8A600',
      rgb: [248, 166, 0],
    };

    const result = color(mock);
    expect(result.srm.value).to.be.closeTo(expected.srm.value, 0.01);
    expect(result.srm.symbol).to.be.equal(expected.srm.symbol);
    expect(result.ebc.value).to.be.closeTo(expected.ebc.value, 0.01);
    expect(result.ebc.symbol).to.be.equal(expected.ebc.symbol);
    expect(result.lovibond.value).to.be.closeTo(expected.lovibond.value, 0.01);
    expect(result.lovibond.symbol).to.be.equal(expected.lovibond.symbol);
    expect(result.hex).to.be.equal(expected.hex);
    expect(result.rgb).to.be.deep.deep.equal(expected.rgb);
  });
});

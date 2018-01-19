/* global describe, it */
const { expect } = require('chai');
const { volumeCo2 } = require('./calculators');
const { Temperature } = require('../units/units');

describe('Volume CO2 Calculator', () => {
  it('total CO2', () => {
    const params = {
      kgfcm2: 2,
      temperature: new Temperature(20),
    };

    expect(volumeCo2(params)).to.be.closeTo(2.47, 0.01);
  });
});

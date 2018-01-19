/* global describe, it */
const { expect } = require('chai');
const { calculate, volumeCo2 } = require('./calculator');

describe('Volume CO2 Calculator', () => {
  it('total CO2', () => {
    const params = {
      kgfcm2: 2,
      temperature: {
        celcius: {
          value: 20,
          symbol: 'ºC',
        },
        fahrenheit: {
          value: 68,
          symbol: 'ºF',
        },
      },
    };

    expect(calculate(volumeCo2, params)).to.be.closeTo(2.47, 0.01);
  });
});

/* global describe, it */
const { expect } = require('chai');
const { volumeCo2 } = require('./calculators');

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

    expect(volumeCo2(params)).to.be.closeTo(2.47, 0.01);
  });
});

/* global describe, it */
const { expect } = require('chai');
const Temperature = require('./Temperature');

const expected = {
  celcius: { value: 64, symbol: 'ºC' },
  fahrenheit: { value: 147.2, symbol: 'ºF' },
};

describe('Temperature', () => {
  it('new instance', () => {
    const temperature = new Temperature('64ºC');
    expect(temperature).to.be.instanceof(Temperature);
    expect(temperature).to.be.deep.equal(expected);
  });
});

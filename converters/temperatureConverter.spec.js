/* global describe, it */
const { expect } = require('chai');
const converter = require('./temperatureConverter');

const c = 64;
const f = 147.2;

describe('Temperature Converver', () => {
  it('ºC to ºF', () => {
    expect(converter.celcius(c).inFahrenheit()).to.be.closeTo(f, 0.1);
  });
  it('ºF to ºC', () => {
    expect(converter.fahrenheit(f).inCelcius()).to.be.closeTo(c, 0.1);
  });
});

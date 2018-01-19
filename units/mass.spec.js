/* global describe, it */
const { expect } = require('chai');
const Mass = require('./Mass');

const expected = {
  grams: { value: 8000, symbol: 'g' },
  kilograms: { value: 8, symbol: 'kg' },
  pounds: { value: 17.63698096, symbol: 'lbs' },
  ounces: { value: 282.192, symbol: 'oz' },
};

describe('Mass', () => {
  it('new instance', () => {
    const mass = new Mass('8kg');
    expect(mass).to.be.instanceof(Mass);
    expect(mass).to.be.deep.equal(expected);
  });
});

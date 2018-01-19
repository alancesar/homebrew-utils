/* global describe, it */
const { expect } = require('chai');
const Volume = require('./Volume');

const expected = {
  milliliters: { value: 40000, symbol: 'ml' },
  liters: { value: 40, symbol: 'l' },
  gallons: { value: 10.56688208, symbol: 'gal' },
};

describe('Volume', () => {
  it('new instance', () => {
    const volume = new Volume('40l');
    expect(volume).to.be.instanceof(Volume);
    expect(volume).to.be.deep.equal(expected);
  });
});

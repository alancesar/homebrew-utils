/* global describe, it */
const { expect } = require('chai');
const Density = require('./Density');

const expected = {
  sg: { value: 1.0919540676449373, symbol: 'kg/m³' },
  brix: { value: 22, symbol: 'ºBx' },
};

describe('Density', () => {
  it('new instance', () => {
    const density = new Density('22bx');
    expect(density).to.be.instanceof(Density);
    expect(density).to.be.deep.equal(expected);
  });
});

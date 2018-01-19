/* global describe, it */
const { expect } = require('chai');
const converter = require('./densityConverter');

describe('Density Converver', () => {
  it('Brix to SG', () => {
    expect(converter.brix(22).inSg()).to.be.closeTo(1.092, 0.001);
  });
  it('GS to Brix', () => {
    expect(converter.sg(1.092).inBrix()).to.be.closeTo(22, 0.1);
  });
});

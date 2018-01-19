/* global describe, it */
const { expect } = require('chai');
const Color = require('./Color');

const expected = {
  ebc: { value: 47.28, symbol: 'EBC' },
  l: { value: 18.278458585560315, symbol: 'ºL' },
  srm: { value: 24, symbol: 'SRM' },
  hex: '#821E00',
  rgb: [130, 30, 0],
};

describe('Color', () => {
  it('new instance', () => {
    const color = new Color('24srm');
    expect(color).to.be.instanceof(Color);
    expect(color).to.be.deep.equal(expected);
  });
});

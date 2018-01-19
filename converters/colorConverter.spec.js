/* global describe, it */
const { expect } = require('chai');
const converter = require('./colorConverter');

const srm = 24.00;
const ebc = 47.28;
const l = 18.27;
const hex = '#821E00';
const rgb = [130, 30, 0];

describe('Color Converver', () => {
  it('EBC to ºL', () => {
    expect(converter.ebc(ebc).inL()).to.be.closeTo(l, 0.1);
  });
  it('EBC to SRM', () => {
    expect(converter.ebc(ebc).inSrm()).to.be.closeTo(srm, 0.1);
  });
  it('ºL to EBC', () => {
    expect(converter.l(l).inEbc()).to.be.closeTo(ebc, 0.1);
  });
  it('ºL to SRM', () => {
    expect(converter.l(l).inSrm()).to.be.closeTo(srm, 0.1);
  });
  it('SRM to EBC', () => {
    expect(converter.srm(srm).inEbc()).to.be.closeTo(ebc, 0.1);
  });
  it('SRM to ºL', () => {
    expect(converter.srm(srm).inL()).to.be.closeTo(l, 0.1);
  });
  it('HEX to RGB', () => {
    expect(converter.hex(hex).inRgb()).to.be.deep.equal(rgb);
  });
});

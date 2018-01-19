/* global describe, it */
const { expect } = require('chai');
const converter = require('./volumeConverter');

const l = 40;
const ml = 40000;
const gal = 10.56;

describe('Volume Converver', () => {
  it('l to ml', () => {
    expect(converter.liters(l).inMilliliters()).to.be.equal(ml);
  });
  it('ºl to gal', () => {
    expect(converter.liters(l).inGallons()).to.be.closeTo(gal, 0.1);
  });

  it('ml to l', () => {
    expect(converter.milliliters(ml).inLiters()).to.be.equal(l);
  });
  it('ml to gal', () => {
    expect(converter.milliliters(ml).inGallons()).to.be.closeTo(gal, 0.1);
  });

  it('gal to ml', () => {
    expect(converter.gallons(gal).inMilliliters()).to.be.closeTo(ml, 50);
  });
  it('gal to l', () => {
    expect(converter.gallons(gal).inLiters()).to.be.closeTo(l, 0.1);
  });
});

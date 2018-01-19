/* global describe, it */
const { expect } = require('chai');
const converter = require('./massConverter');

const kg = 8;
const g = 8000;
const lbs = 17.63;
const oz = 282.192;

describe('Mass Converver', () => {
  it('kg in g', () => {
    expect(converter.kilograms(kg).inGrams()).to.be.equal(g);
  });
  it('kg in lbs', () => {
    expect(converter.kilograms(kg).inPounds()).to.be.closeTo(lbs, 0.01);
  });
  it('kg in lbs', () => {
    expect(converter.kilograms(kg).inOunces()).to.be.closeTo(oz, 0.01);
  });

  it('g in kg', () => {
    expect(converter.grams(g).inKilograms()).to.be.equal(kg);
  });
  it('g in lbs', () => {
    expect(converter.grams(g).inPounds()).to.be.closeTo(lbs, 0.01);
  });
  it('g in oz', () => {
    expect(converter.grams(g).inOunces()).to.be.closeTo(oz, 0.01);
  });

  it('lbs in kg', () => {
    expect(converter.pounds(lbs).inKilograms()).to.be.closeTo(kg, 0.01);
  });
  it('lbs in g', () => {
    expect(converter.pounds(lbs).inGrams()).to.be.closeTo(g, 5);
  });
  it('lbs in oz', () => {
    expect(converter.pounds(lbs).inOunces()).to.be.closeTo(oz, 0.2);
  });

  it('oz in kg', () => {
    expect(converter.ounces(oz).inKilograms()).to.be.closeTo(kg, 0.01);
  });
  it('oz in g', () => {
    expect(converter.ounces(oz).inGrams()).to.be.closeTo(g, 0.01);
  });
  it('oz in lbs', () => {
    expect(converter.ounces(oz).inPounds()).to.be.closeTo(lbs, 0.01);
  });
});

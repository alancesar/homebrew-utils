/* global describe, it */
const { expect } = require('chai');
const { calculate, abv } = require('./calculator');
const Density = require('../models/Density');

describe('ABV Calculator', () => {
  it('total ABV and Attenuation', () => {
    const params = {
      og: new Density(1.042),
      fg: new Density(1.008),
    };
    const result = calculate(abv, params);
    expect(result.abv).to.be.closeTo(0.044625, 0.0001);
    expect(result.attenuation).to.be.closeTo(0.8095, 0.0001);
  });
});

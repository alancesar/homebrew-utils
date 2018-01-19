/* global describe, it */
const { expect } = require('chai');
const { calculate, ibu } = require('./calculator');
const Volume = require('../models/Volume');
const Mass = require('../models/Mass');

const mock = {
  inputs: [
    {
      quantity: new Mass('54g'),
      alphaAcids: 0.157,
      boilTime: 60,
    },
    {
      quantity: new Mass('44g'),
      alphaAcids: 0.078,
      boilTime: 5,
    },
    {
      quantity: new Mass('42g'),
      alphaAcids: 0.122,
      boilTime: 5,
    },
    {
      quantity: new Mass('20g'),
      alphaAcids: 0.161,
      boilTime: 5,
    },
    {
      quantity: new Mass('43g'),
      alphaAcids: 0.105,
      boilTime: 0,
    },
  ],
  og: 1.063,
  wortCollected: new Volume('42l'),
  batchSize: new Volume('36l'),
};

describe('IBU Calculator', () => {
  it('total IBU', () => {
    const result = calculate(ibu, mock);
    expect(result).to.be.closeTo(73.61, 0.1);
  });
});

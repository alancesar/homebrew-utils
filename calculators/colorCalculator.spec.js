const { color } = require('./calculators');
const { Color, Mass, Volume } = require('../units/units');

describe('Color Calculator', () => {
  const mock = {
    inputs: [
      {
        quantity: new Mass('4kg'),
        color: new Color(3),
      },
      {
        quantity: new Mass('4kg'),
        color: new Color(5),
      },
      {
        quantity: new Mass('2kg'),
        color: new Color(5),
      },
    ],
    batchSize: new Volume('40l'),
  };

  it('total SRM, EBC, ºL and Expected Color', () => {
    const expected = {
      ebc: {
        value: 11.86,
        symbol: 'EBC',
      },
      lovibond: {
        value: 5.00,
        symbol: 'ºL',
      },
      srm: {
        value: 6.02,
        symbol: 'SRM',
      },
      hex: '#F8A600',
      rgb: [248, 166, 0],
    };

    const result = color(mock);
    expect(result.srm.value).toBeCloseTo(expected.srm.value, 1);
    expect(result.srm.symbol).toBe(expected.srm.symbol);
    expect(result.ebc.value).toBeCloseTo(expected.ebc.value, 1);
    expect(result.ebc.symbol).toBe(expected.ebc.symbol);
    expect(result.lovibond.value).toBeCloseTo(expected.lovibond.value, 1);
    expect(result.lovibond.symbol).toBe(expected.lovibond.symbol);
    expect(result.hex).toBe(expected.hex);
    expect(result.rgb).toEqual(expected.rgb);
  });
});

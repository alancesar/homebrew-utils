const Color = require('./Color');

describe('Color', () => {
  const expected = {
    ebc: { value: 47.28, symbol: 'EBC' },
    lovibond: { value: 18.278458585560315, symbol: 'ºL' },
    srm: { value: 24, symbol: 'SRM' },
    hex: '#821E00',
    rgb: [130, 30, 0],
  };

  it('new instance', () => {
    const color = new Color('24srm');
    expect(color).toBeInstanceOf(Color);
    expect(color).toEqual(expected);
  });
});

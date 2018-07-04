const Volume = require('./Volume');

describe('Volume', () => {
  const expected = {
    milliliters: { value: 40000, symbol: 'ml' },
    liters: { value: 40, symbol: 'l' },
    gallons: { value: 10.56688208, symbol: 'gal' },
  };

  it('new instance', () => {
    const volume = new Volume('40l');
    expect(volume).toBeInstanceOf(Volume);
    expect(volume).toEqual(expected);
  });
});

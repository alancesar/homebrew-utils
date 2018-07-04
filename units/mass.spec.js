const Mass = require('./Mass');

describe('Mass', () => {
  const expected = {
    grams: { value: 8000, symbol: 'g' },
    kilograms: { value: 8, symbol: 'kg' },
    pounds: { value: 17.63698096, symbol: 'lbs' },
    ounces: { value: 282.192, symbol: 'oz' },
  };

  it('new instance', () => {
    const mass = new Mass('8kg');
    expect(mass).toBeInstanceOf(Mass);
    expect(mass).toEqual(expected);
  });
});

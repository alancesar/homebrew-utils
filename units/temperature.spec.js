const Temperature = require('./Temperature');

describe('Temperature', () => {
  const expected = {
    celcius: { value: 64, symbol: 'ºC' },
    fahrenheit: { value: 147.2, symbol: 'ºF' },
  };

  it('new instance', () => {
    const temperature = new Temperature('64ºC');
    expect(temperature).toBeInstanceOf(Temperature);
    expect(temperature).toEqual(expected);
  });
});

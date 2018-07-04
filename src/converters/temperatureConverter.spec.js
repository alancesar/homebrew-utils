import converter from './temperatureConverter';

describe('Temperature Converver', () => {
  const c = 64;
  const f = 147.2;

  it('ºC to ºF', () => {
    expect(converter.celcius(c).inFahrenheit()).toBeCloseTo(f, 1);
  });
  it('ºF to ºC', () => {
    expect(converter.fahrenheit(f).inCelcius()).toBeCloseTo(c, 1);
  });
});

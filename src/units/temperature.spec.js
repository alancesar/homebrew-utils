import Temperature from './temperature';

describe('Temperature', () => {
  const expected = {
    celcius: { value: 64, symbol: 'ºC' },
    fahrenheit: { value: 147.2, symbol: 'ºF' },
  };

  describe('Default constructor', () => {
    it('from string', () => {
      const temperature = new Temperature('64ºC');
      expect(temperature).toBeInstanceOf(Temperature);
      expect(temperature).toEqual(expected);
    });

    it('from number', () => {
      const temperature = new Temperature(64);
      expect(temperature).toBeInstanceOf(Temperature);
      expect(temperature).toEqual(expected);
    });

    it('empty construtor', () => {
      const temperature = new Temperature();
      expect(temperature).toBeInstanceOf(Temperature);
    });
  });

  describe('Static constructor', () => {
    it('celcius constructor', () => {
      const temperature = Temperature.celcius(64);
      expect(temperature).toBeInstanceOf(Temperature);
      expect(temperature.celcius.value).toEqual(64);
    });

    it('fahrenheit constructor', () => {
      const temperature = Temperature.fahrenheit(147);
      expect(temperature).toBeInstanceOf(Temperature);
      expect(temperature.fahrenheit.value).toEqual(147);
    });
  });
});

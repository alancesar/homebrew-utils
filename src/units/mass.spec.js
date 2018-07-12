import Mass from './mass';

describe('Mass', () => {
  const expected = {
    grams: { value: 8000, symbol: 'g' },
    kilograms: { value: 8, symbol: 'kg' },
    pounds: { value: 17.63698096, symbol: 'lbs' },
    ounces: { value: 282.192, symbol: 'oz' },
  };

  describe('Default constructor', () => {
    it('from string', () => {
      const mass = new Mass('8kg');
      expect(mass).toBeInstanceOf(Mass);
      expect(mass).toEqual(expected);
    });

    it('from number', () => {
      const mass = new Mass(8);
      expect(mass).toBeInstanceOf(Mass);
      expect(mass).toEqual(expected);
    });

    it('empty constuctor', () => {
      const mass = new Mass();
      expect(mass).toBeInstanceOf(Mass);
    });
  });

  describe('Static constructor', () => {
    it('grams constructor', () => {
      const mass = Mass.grams(8000);
      expect(mass).toBeInstanceOf(Mass);
      expect(mass.grams.value).toEqual(8000);
    });

    it('kilograms constructor', () => {
      const mass = Mass.kilograms(8);
      expect(mass).toBeInstanceOf(Mass);
      expect(mass.kilograms.value).toEqual(8);
    });

    it('pounds constructor', () => {
      const mass = Mass.pounds(18);
      expect(mass).toBeInstanceOf(Mass);
      expect(mass.pounds.value).toEqual(18);
    });

    it('ounces constructor', () => {
      const mass = Mass.ounces(282);
      expect(mass).toBeInstanceOf(Mass);
      expect(mass.ounces.value).toEqual(282);
    });
  });
});

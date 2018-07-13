import converter from './massConverter';

describe('Mass Converver', () => {
  const kg = 8;
  const g = 8000;
  const lbs = 17.637;
  const oz = 282.192;

  describe('in kg', () => {
    it('to g', () => {
      expect(converter.kilograms(kg).inGrams()).toEqual(g);
    });

    it('to lbs', () => {
      expect(converter.kilograms(kg).inPounds()).toBeCloseTo(lbs, 3);
    });

    it('to oz', () => {
      expect(converter.kilograms(kg).inOunces()).toBeCloseTo(oz, 3);
    });
  });

  describe('in g', () => {
    it('to kg', () => {
      expect(converter.grams(g).inKilograms()).toEqual(kg);
    });
    it('to lbs', () => {
      expect(converter.grams(g).inPounds()).toBeCloseTo(lbs, 3);
    });
    it('to oz', () => {
      expect(converter.grams(g).inOunces()).toBeCloseTo(oz, 3);
    });
  });

  describe('in lbs', () => {
    it('to kg', () => {
      expect(converter.pounds(lbs).inKilograms()).toBeCloseTo(kg, 3);
    });

    it('to g', () => {
      // Given
      const input = lbs;

      // When
      const output = converter.pounds(input).inGrams();

      // Then
      expect(output / 1000).toBeCloseTo(g / 1000, 3);
    });

    it('to oz', () => {
      expect(converter.pounds(lbs).inOunces()).toBeCloseTo(oz, 3);
    });
  });

  describe('in oz', () => {
    it('to kg', () => {
      expect(converter.ounces(oz).inKilograms()).toBeCloseTo(kg, 3);
    });

    it('to g', () => {
      expect(converter.ounces(oz).inGrams()).toBeCloseTo(g, 1);
    });

    it('to lbs', () => {
      expect(converter.ounces(oz).inPounds()).toBeCloseTo(lbs, 1);
    });
  });
});

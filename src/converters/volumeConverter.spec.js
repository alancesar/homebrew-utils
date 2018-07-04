import converter from './volumeConverter';

describe('Volume Converver', () => {
  const l = 40;
  const ml = 40000;
  const gal = 10.56;

  describe('in l', () => {
    it('to ml', () => {
      expect(converter.liters(l).inMilliliters()).toEqual(ml);
    });

    it('to gal', () => {
      expect(converter.liters(l).inGallons()).toBeCloseTo(gal, 1);
    });
  });

  describe('in ml', () => {
    it('to l', () => {
      expect(converter.milliliters(ml).inLiters()).toEqual(l);
    });

    it('to gal', () => {
      expect(converter.milliliters(ml).inGallons()).toBeCloseTo(gal, 1);
    });
  });

  describe('in gal', () => {
    it('to ml', () => {
      // Given
      const input = gal;

      // When
      const output = converter.gallons(input).inMilliliters();

      // Then
      expect(output / 1000).toBeCloseTo(ml / 1000, 1);
    });

    it('to l', () => {
      expect(converter.gallons(gal).inLiters()).toBeCloseTo(l, 1);
    });
  });
});

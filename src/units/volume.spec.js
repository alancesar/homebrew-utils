import Volume from './volume';

describe('Volume', () => {
  const expected = {
    milliliters: { value: 40000, symbol: 'ml' },
    liters: { value: 40, symbol: 'l' },
    gallons: { value: 10.56688208, symbol: 'gal' },
  };

  describe('Default constructor', () => {
    it('from string', () => {
      const volume = new Volume('40l');
      expect(volume).toBeInstanceOf(Volume);
      expect(volume).toEqual(expected);
    });

    it('from number', () => {
      const volume = new Volume(40);
      expect(volume).toBeInstanceOf(Volume);
      expect(volume).toEqual(expected);
    });

    it('empty constructor', () => {
      const volume = new Volume();
      expect(volume).toBeInstanceOf(Volume);
    });
  });

  describe('Static constructor', () => {
    it('milliliters constructor', () => {
      const volume = Volume.milliliters(1000);
      expect(volume).toBeInstanceOf(Volume);
      expect(volume.milliliters.value).toEqual(1000);
    });

    it('liters constructor', () => {
      const volume = Volume.liters(40);
      expect(volume).toBeInstanceOf(Volume);
      expect(volume.liters.value).toEqual(40);
    });

    it('gallons constructor', () => {
      const volume = Volume.gallons(10);
      expect(volume).toBeInstanceOf(Volume);
      expect(volume.gallons.value).toEqual(10);
    });
  });
});

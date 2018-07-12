import Density from './density';

describe('Density', () => {
  describe('Default constructor', () => {
    it('from string', () => {
      const density = new Density('22bx');
      expect(density).toBeInstanceOf(Density);
      expect(density).toEqual({
        sg: { value: 1.0919540676449373, symbol: 'sg' },
        brix: { value: 22, symbol: 'ºBx' },
      });
    });

    it('from number', () => {
      const density = new Density(1.092);
      expect(density).toBeInstanceOf(Density);
      expect(density).toEqual({
        sg: { value: 1.092, symbol: 'sg' },
        brix: { value: 22.014119055148626, symbol: 'ºBx' },
      });
    });

    it('empty constructor', () => {
      const density = new Density();
      expect(density).toBeInstanceOf(Density);
    });
  });

  describe('Static constructor', () => {
    it('sg constructor', () => {
      const density = Density.sg(22);
      expect(density).toBeInstanceOf(Density);
      expect(density.sg.value).toEqual(22);
    });

    it('brix constructor', () => {
      const density = Density.brix(1.092);
      expect(density).toBeInstanceOf(Density);
      expect(density.brix.value).toEqual(1.092);
    });
  });
});

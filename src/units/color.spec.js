import Color from './color';

describe('Color', () => {
  const expected = {
    ebc: { value: 47.28, symbol: 'EBC' },
    lovibond: { value: 18.278458585560315, symbol: 'ºL' },
    srm: { value: 24, symbol: 'SRM' },
    hex: '#821E00',
    rgb: [130, 30, 0],
  };

  describe('Default constructor', () => {
    it('from string', () => {
      const color = new Color('24srm');
      expect(color).toBeInstanceOf(Color);
      expect(color).toEqual(expected);
    });

    it('from number', () => {
      const color = new Color(24);
      expect(color).toBeInstanceOf(Color);
      expect(color).toEqual(expected);
    });

    it('empty constructor', () => {
      const color = new Color();
      expect(color).toBeInstanceOf(Color);
    });
  });

  describe('Static constructor', () => {
    it('ebc constructor', () => {
      const color = Color.ebc(47.28);
      expect(color).toBeInstanceOf(Color);
      expect(color.ebc.value).toEqual(47.28);
    });

    it('lovibond constructor', () => {
      const color = Color.lovibond(18);
      expect(color).toBeInstanceOf(Color);
      expect(color.lovibond.value).toEqual(18);
    });

    it('srm constructor', () => {
      const color = Color.srm(24);
      expect(color).toBeInstanceOf(Color);
      expect(color.srm.value).toEqual(24);
    });
  });
});

import Density from './density';

describe('Density', () => {
  const expected = {
    sg: { value: 1.0919540676449373, symbol: 'sg' },
    brix: { value: 22, symbol: 'ºBx' },
  };

  it('new instance', () => {
    const density = new Density('22bx');
    expect(density).toBeInstanceOf(Density);
    expect(density).toEqual(expected);
  });
});

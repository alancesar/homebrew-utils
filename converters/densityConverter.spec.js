const converter = require('./densityConverter');

describe('Density Converver', () => {
  it('Brix to SG', () => {
    expect(converter.brix(22).inSg()).toBeCloseTo(1.092, 1);
  });

  it('GS to Brix', () => {
    expect(converter.sg(1.092).inBrix()).toBeCloseTo(22, 1);
  });
});

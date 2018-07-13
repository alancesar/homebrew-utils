import { abv } from './calculators';
import { Density } from '../units/units';

describe('ABV Calculator', () => {
  it('total ABV, ABW and Attenuation', () => {
    const params = {
      og: new Density(1.042),
      fg: new Density(1.008),
    };
    const result = abv(params);

    expect(result.abv).toBeCloseTo(0.0448, 3);
    expect(result.abw).toBeCloseTo(0.0358, 3);
    expect(result.attenuation).toBeCloseTo(0.8095, 3);
  });
});

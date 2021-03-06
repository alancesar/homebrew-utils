import { volumeCo2 } from './calculators';
import { Temperature } from '../units/units';

describe('Volume CO2 Calculator', () => {
  it('total CO2', () => {
    const params = {
      kgfcm2: 2,
      temperature: new Temperature(20),
    };

    expect(volumeCo2(params)).toBeCloseTo(2.47, 1);
  });
});

import { ibu } from './calculators';
import { Density, Volume, Mass } from '../units/units';

describe('IBU Calculator', () => {
  const mock = {
    inputs: [
      {
        quantity: new Mass('54g'),
        alphaAcids: 0.157,
        boilTime: 60,
      },
      {
        quantity: new Mass('44g'),
        alphaAcids: 0.078,
        boilTime: 5,
      },
      {
        quantity: new Mass('42g'),
        alphaAcids: 0.122,
        boilTime: 5,
      },
      {
        quantity: new Mass('20g'),
        alphaAcids: 0.161,
        boilTime: 5,
      },
      {
        quantity: new Mass('43g'),
        alphaAcids: 0.105,
        boilTime: 0,
      },
    ],
    og: new Density(1.063),
    wortCollected: new Volume('42l'),
    batchSize: new Volume('36l'),
  };

  it('total IBU', () => {
    const result = ibu(mock);
    expect(result).toBeCloseTo(73.61, 2);
  });
});

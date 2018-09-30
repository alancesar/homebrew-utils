import { expectedGravity } from './calculators';
import { Mass, Volume } from '../units/units';

describe('Expected Gravity Calculator', () => {
  const mock = {
    inputs: [
      {
        ppg: 37,
        quantity: new Mass('7kg'),
        mashable: true,
      },
      {
        ppg: 33,
        quantity: new Mass('700g'),
        mashable: true,
      },
      {
        ppg: 38,
        quantity: new Mass('6kg'),
        mashable: true,
      },
      {
        ppg: 2,
        quantity: new Mass('200g'),
        mashable: false,
      },
    ],
    wortCollected: new Volume('64l'),
    batchSize: new Volume('40l'),
    efficiency: 0.75,
    attenuation: 0.72,
  };

  it('OG, FG and ABV', () => {
    const result = expectedGravity(mock);
    expect(result.preBoilOg.sg.value).toBeCloseTo(1.050, 3);
    expect(result.og.sg.value).toBeCloseTo(1.080, 3);
    expect(result.fg.sg.value).toBeCloseTo(1.022, 3);
    expect(result.abv).toBeCloseTo(0.0809, 3);
  });
});

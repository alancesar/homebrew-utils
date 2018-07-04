const { refractometer } = require('./calculators');
const { Density } = require('../units/units');

describe('Refractometer Calculator', () => {
  it('refractometer correction', () => {
    const params = {
      og: new Density('17.1bx'),
      fg: new Density('7.3bx'),
    };

    const result = refractometer(params);
    expect(result.sg.value).toBeCloseTo(1.010, 1);
  });
});

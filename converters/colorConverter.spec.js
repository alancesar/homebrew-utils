const converter = require('./colorConverter');

describe('Color Converver', () => {
  const srm = 24.00;
  const ebc = 47.28;
  const l = 18.27;
  const hex = '#821E00';
  const rgb = [130, 30, 0];

  it('EBC to ºL', () => {
    expect(converter.ebc(ebc).inL()).toBeCloseTo(l, 1);
  });

  it('EBC to SRM', () => {
    expect(converter.ebc(ebc).inSrm()).toBeCloseTo(srm, 1);
  });

  it('ºL to EBC', () => {
    expect(converter.l(l).inEbc()).toBeCloseTo(ebc, 1);
  });

  it('ºL to SRM', () => {
    expect(converter.l(l).inSrm()).toBeCloseTo(srm, 1);
  });

  it('SRM to EBC', () => {
    expect(converter.srm(srm).inEbc()).toBeCloseTo(ebc, 1);
  });

  it('SRM to ºL', () => {
    expect(converter.srm(srm).inL()).toBeCloseTo(l, 1);
  });

  it('HEX to RGB', () => {
    expect(converter.hex(hex).inRgb()).toEqual(rgb);
  });
});

import builder from '../utils/builder';
import regex from '../utils/regex';
import srmColorMap from '../utils/srmColorMap';
import { color as symbols } from '../utils/symbols';
import converter from '../converters/colorConverter';

const hexAndRgbValue = (data) => {
  const hex = srmColorMap[Math.floor(data.srm.value)] || srmColorMap.max;
  const rgb = converter.hex(hex).inRgb();
  return { hex, rgb };
};

export default class Color {
  constructor(value = 0) {
    const rules = [
      {
        expression: /srm$/,
        method: Color.srm,
      },
      {
        expression: /ebc$/,
        method: Color.ebc,
      },
      {
        expression: /(l|ºl)$/,
        method: Color.lovibond,
      },
    ];

    const data = regex(value, rules);
    Object.assign(this, data, hexAndRgbValue(data));
  }

  static ebc(value) {
    return builder(Color.prototype, {
      ebc: {
        value,
        symbol: symbols.ebc,
      },
      lovibond: {
        value: converter.ebc(value).inL(),
        symbol: symbols.lovibond,
      },
      srm: {
        value: converter.ebc(value).inSrm(),
        symbol: symbols.srm,
      },
    }, hexAndRgbValue);
  }

  static lovibond(value) {
    return builder(Color.prototype, {
      ebc: {
        value: converter.l(value).inEbc(),
        symbol: symbols.ebc,
      },
      lovibond: {
        value,
        symbol: symbols.lovibond,
      },
      srm: {
        value: converter.l(value).inSrm(),
        symbol: symbols.srm,
      },
    }, hexAndRgbValue);
  }

  static srm(value) {
    return builder(Color.prototype, {
      ebc: {
        value: converter.srm(value).inEbc(),
        symbol: symbols.ebc,
      },
      lovibond: {
        value: converter.srm(value).inL(),
        symbol: symbols.lovibond,
      },
      srm: {
        value,
        symbol: symbols.srm,
      },
    }, hexAndRgbValue);
  }
}

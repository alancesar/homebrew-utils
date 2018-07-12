import merger from '../utils/merger';
import regex from '../utils/regex';
import srmColorMap from '../utils/srmColorMap';
import { color as symbols } from '../utils/symbols';
import converter from '../converters/colorConverter';

const hexAndRgbValue = ({ srm }) => {
  const hex = srmColorMap[Math.floor(srm.value)] || srmColorMap.max;
  const rgb = converter.hex(hex).inRgb();
  return { hex, rgb };
};

export default class Color {
  constructor(properties = 0) {
    if (typeof properties === 'object') {
      Object.assign(this, properties);
      return;
    }

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

    Object.assign(this, merger(regex(properties, rules), hexAndRgbValue));
  }

  static ebc(value) {
    return new Color(merger({
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
    }, hexAndRgbValue));
  }

  static lovibond(value) {
    return new Color(merger({
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
    }, hexAndRgbValue));
  }

  static srm(value) {
    return new Color(merger({
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
    }, hexAndRgbValue));
  }
}

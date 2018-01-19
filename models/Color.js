const builder = require('../utils/builder');
const regex = require('../utils/regex');
const converter = require('../converters/colorConverter');
const srmColorMap = require('../utils/srmColorMap');
const symbols = require('../utils/symbols').color;

const hexAndRgbValue = (data) => {
  const hex = srmColorMap[Math.floor(data.srm.value)] || srmColorMap.max;
  const rgb = converter.hex(hex).inRgb();
  return { hex, rgb };
};

class Color {
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
        method: Color.l,
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
      l: {
        value: converter.ebc(value).inL(),
        symbol: symbols.l,
      },
      srm: {
        value: converter.ebc(value).inSrm(),
        symbol: symbols.srm,
      },
    }, hexAndRgbValue);
  }

  static l(value) {
    return builder(Color.prototype, {
      ebc: {
        value: converter.l(value).inEbc(),
        symbol: symbols.ebc,
      },
      l: {
        value,
        symbol: symbols.l,
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
      l: {
        value: converter.srm(value).inL(),
        symbol: symbols.l,
      },
      srm: {
        value,
        symbol: symbols.srm,
      },
    }, hexAndRgbValue);
  }
}

module.exports = Color;

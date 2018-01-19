const builder = require('../utils/builder');
const regex = require('../utils/regex');
const symbols = require('../utils/symbols').density;
const converter = require('../converters/densityConverter');

class Density {
  constructor(value = 0) {
    const rules = [
      {
        expression: /(kg\/m³|kg\/m3|kgm³|kgm3)$/,
        method: Density.sg,
      },
      {
        expression: /(ºbx|bx)$/,
        method: Density.brix,
      },
    ];

    Object.assign(this, regex(value, rules));
  }

  static sg(value) {
    return builder(Density.prototype, {
      sg: {
        value,
        symbol: symbols.sg,
      },
      brix: {
        value: converter.sg(value).inBrix(),
        symbol: symbols.brix,
      },
    });
  }

  static brix(value) {
    return builder(Density.prototype, {
      sg: {
        value: converter.brix(value).inSg(),
        symbol: symbols.sg,
      },
      brix: {
        value,
        symbol: symbols.brix,
      },
    });
  }
}

module.exports = Density;

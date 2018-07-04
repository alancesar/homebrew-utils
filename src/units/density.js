import builder from '../utils/builder';
import regex from '../utils/regex';
import { density as symbols } from '../utils/symbols';
import converter from '../converters/densityConverter';

export default class Density {
  constructor(value = 0) {
    const rules = [
      {
        expression: /(sg)$/,
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

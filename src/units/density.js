import builder from '../utils/builder';
import regex from '../utils/regex';
import { density } from '../utils/symbols';
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
        symbol: density.sg,
      },
      brix: {
        value: converter.sg(value).inBrix(),
        symbol: density.brix,
      },
    });
  }

  static brix(value) {
    return builder(Density.prototype, {
      sg: {
        value: converter.brix(value).inSg(),
        symbol: density.sg,
      },
      brix: {
        value,
        symbol: density.brix,
      },
    });
  }
}

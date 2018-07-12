import merger from '../utils/merger';
import regex from '../utils/regex';
import { density as symbols } from '../utils/symbols';
import converter from '../converters/densityConverter';

export default class Density {
  constructor(properties = 0) {
    if (typeof properties === 'object') {
      Object.assign(this, properties);
      return;
    }

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

    Object.assign(this, regex(properties, rules));
  }

  static sg(value) {
    return new Density(merger({
      sg: {
        value,
        symbol: symbols.sg,
      },
      brix: {
        value: converter.sg(value).inBrix(),
        symbol: symbols.brix,
      },
    }));
  }

  static brix(value) {
    return new Density(merger({
      sg: {
        value: converter.brix(value).inSg(),
        symbol: symbols.sg,
      },
      brix: {
        value,
        symbol: symbols.brix,
      },
    }));
  }
}

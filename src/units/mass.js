import builder from '../utils/builder';
import regex from '../utils/regex';
import { mass as symbols } from '../utils/symbols';
import converter from '../converters/massConverter';

export default class Mass {
  constructor(value = 0) {
    const rules = [
      {
        expression: /kg$/,
        method: Mass.kilograms,
      },
      {
        expression: /g$/,
        method: Mass.grams,
      },
      {
        expression: /lbs$/,
        method: Mass.pounds,
      },
      {
        expression: /oz$/,
        method: Mass.ounces,
      },
    ];

    Object.assign(this, regex(value, rules));
  }

  static grams(value) {
    return builder(Mass.prototype, {
      grams: {
        value,
        symbol: symbols.grams,
      },
      kilograms: {
        value: converter.grams(value).inKilograms(),
        symbol: symbols.kilograms,
      },
      pounds: {
        value: converter.grams(value).inPounds(),
        symbol: symbols.pounds,
      },
      ounces: {
        value: converter.grams(value).inOunces(),
        symbol: symbols.ounces,
      },
    });
  }

  static kilograms(value) {
    return builder(Mass.prototype, {
      grams: {
        value: converter.kilograms(value).inGrams(),
        symbol: symbols.grams,
      },
      kilograms: {
        value,
        symbol: symbols.kilograms,
      },
      pounds: {
        value: converter.kilograms(value).inPounds(),
        symbol: symbols.pounds,
      },
      ounces: {
        value: converter.kilograms(value).inOunces(),
        symbol: symbols.ounces,
      },
    });
  }

  static pounds(value) {
    return builder(Mass.prototype, {
      grams: {
        value: converter.pounds(value).inGrams(),
        symbol: symbols.grams,
      },
      kilograms: {
        value: converter.pounds(value).inKilograms(),
        symbol: symbols.kilograms,
      },
      pounds: {
        value,
        symbol: symbols.pounds,
      },
      ounces: {
        value: converter.pounds(value).inOunces(),
        symbol: symbols.ounces,
      },
    });
  }

  static ounces(value) {
    return builder(Mass.prototype, {
      grams: {
        value: converter.ounces(value).inGrams(),
        symbol: symbols.grams,
      },
      kilograms: {
        value: converter.ounces(value).inKilograms(),
        symbol: symbols.kilograms,
      },
      pounds: {
        value: converter.ounces(value).inPounds(),
        symbol: symbols.pounds,
      },
      ounces: {
        value,
        symbol: symbols.ounces,
      },
    });
  }
}

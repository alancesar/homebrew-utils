import builder from '../utils/builder';
import regex from '../utils/regex';
import { mass } from '../utils/symbols';
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
        symbol: mass.grams,
      },
      kilograms: {
        value: converter.grams(value).inKilograms(),
        symbol: mass.kilograms,
      },
      pounds: {
        value: converter.grams(value).inPounds(),
        symbol: mass.pounds,
      },
      ounces: {
        value: converter.grams(value).inOunces(),
        symbol: mass.ounces,
      },
    });
  }

  static kilograms(value) {
    return builder(Mass.prototype, {
      grams: {
        value: converter.kilograms(value).inGrams(),
        symbol: mass.grams,
      },
      kilograms: {
        value,
        symbol: mass.kilograms,
      },
      pounds: {
        value: converter.kilograms(value).inPounds(),
        symbol: mass.pounds,
      },
      ounces: {
        value: converter.kilograms(value).inOunces(),
        symbol: mass.ounces,
      },
    });
  }

  static pounds(value) {
    return builder(Mass.prototype, {
      grams: {
        value: converter.pounds(value).inGrams(),
        symbol: mass.grams,
      },
      kilograms: {
        value: converter.pounds(value).inKilograms(),
        symbol: mass.kilograms,
      },
      pounds: {
        value,
        symbol: mass.pounds,
      },
      ounces: {
        value: converter.pounds(value).inOunces(),
        symbol: mass.ounces,
      },
    });
  }

  static ounces(value) {
    return builder(Mass.prototype, {
      grams: {
        value: converter.ounces(value).inGrams(),
        symbol: mass.grams,
      },
      kilograms: {
        value: converter.ounces(value).inKilograms(),
        symbol: mass.kilograms,
      },
      pounds: {
        value: converter.ounces(value).inPounds(),
        symbol: mass.pounds,
      },
      ounces: {
        value,
        symbol: mass.ounces,
      },
    });
  }
}

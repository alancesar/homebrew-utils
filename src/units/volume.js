import builder from '../utils/builder';
import regex from '../utils/regex';
import { volume as symbols } from '../utils/symbols';
import converter from '../converters/volumeConverter';

export default class Volume {
  constructor(value = 0) {
    const rules = [
      {
        expression: /l$/,
        method: Volume.liters,
      },
      {
        expression: /ml$/,
        method: Volume.milliliters,
      },
      {
        expression: /gal$/,
        method: Volume.gallons,
      },
    ];

    Object.assign(this, regex(value, rules));
  }

  static milliliters(value) {
    return builder(Volume.prototype, {
      milliliters: {
        value,
        symbol: symbols.milliliters,
      },
      liters: {
        value: converter.milliliters(value).inLiters(),
        symbol: symbols.liters,
      },
      gallons: {
        value: converter.milliliters(value).inGallons(),
        symbol: symbols.gallons,
      },
    });
  }

  static liters(value) {
    return builder(Volume.prototype, {
      milliliters: {
        value: converter.liters(value).inMilliliters(),
        symbol: symbols.milliliters,
      },
      liters: {
        value,
        symbol: symbols.liters,
      },
      gallons: {
        value: converter.liters(value).inGallons(),
        symbol: symbols.gallons,
      },
    });
  }

  static gallons(value) {
    return builder(Volume.prototype, {
      milliliters: {
        value: converter.gallons(value).inMilliliters(),
        symbol: symbols.milliliters,
      },
      liters: {
        value: converter.gallons(value).inLiters(),
        symbol: symbols.liters,
      },
      gallons: {
        value,
        symbol: symbols.gallons,
      },
    });
  }
}

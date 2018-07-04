import builder from '../utils/builder';
import regex from '../utils/regex';
import { volume } from '../utils/symbols';
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
        symbol: volume.milliliters,
      },
      liters: {
        value: converter.milliliters(value).inLiters(),
        symbol: volume.liters,
      },
      gallons: {
        value: converter.milliliters(value).inGallons(),
        symbol: volume.gallons,
      },
    });
  }

  static liters(value) {
    return builder(Volume.prototype, {
      milliliters: {
        value: converter.liters(value).inMilliliters(),
        symbol: volume.milliliters,
      },
      liters: {
        value,
        symbol: volume.liters,
      },
      gallons: {
        value: converter.liters(value).inGallons(),
        symbol: volume.gallons,
      },
    });
  }

  static gallons(value) {
    return builder(Volume.prototype, {
      milliliters: {
        value: converter.gallons(value).inMilliliters(),
        symbol: volume.milliliters,
      },
      liters: {
        value: converter.gallons(value).inLiters(),
        symbol: volume.liters,
      },
      gallons: {
        value,
        symbol: volume.gallons,
      },
    });
  }
}

import builder from '../utils/builder';
import regex from '../utils/regex';
import { temperature } from '../utils/symbols';
import converter from '../converters/temperatureConverter';

export default class Temperature {
  constructor(value = 0) {
    const rules = [
      {
        expression: /(c|ºc)$/,
        method: Temperature.celcius,
      },
      {
        expression: /(f|ºf)$/,
        method: Temperature.fahrenheit,
      },
    ];

    Object.assign(this, regex(value, rules));
  }

  static celcius(value) {
    return builder(Temperature.prototype, {
      celcius: {
        value,
        symbol: temperature.celcius,
      },
      fahrenheit: {
        value: converter.celcius(value).inFahrenheit(),
        symbol: temperature.fahrenheit,
      },
    });
  }

  static fahrenheit(value) {
    return builder(Temperature.prototype, {
      celcius: {
        value: converter.fahrenheit(value).inCelcius(),
        symbol: temperature.celcius,
      },
      fahrenheit: {
        value,
        symbol: temperature.fahrenheit,
      },
    });
  }
}

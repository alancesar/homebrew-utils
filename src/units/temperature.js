import merger from '../utils/merger';
import regex from '../utils/regex';
import { temperature as symbols } from '../utils/symbols';
import converter from '../converters/temperatureConverter';

export default class Temperature {
  constructor(properties = 0) {
    if (typeof properties === 'object') {
      Object.assign(this, properties);
      return;
    }

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

    Object.assign(this, regex(properties, rules));
  }

  static celcius(value) {
    return new Temperature(merger({
      celcius: {
        value,
        symbol: symbols.celcius,
      },
      fahrenheit: {
        value: converter.celcius(value).inFahrenheit(),
        symbol: symbols.fahrenheit,
      },
    }));
  }

  static fahrenheit(value) {
    return new Temperature(merger({
      celcius: {
        value: converter.fahrenheit(value).inCelcius(),
        symbol: symbols.celcius,
      },
      fahrenheit: {
        value,
        symbol: symbols.fahrenheit,
      },
    }));
  }
}

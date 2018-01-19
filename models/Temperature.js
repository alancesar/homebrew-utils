const builder = require('../utils/builder');
const regex = require('../utils/regex');
const symbols = require('../utils/symbols').temperature;
const converter = require('../converters/temperatureConverter');

class Temperature {
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
        symbol: symbols.celcius,
      },
      fahrenheit: {
        value: converter.celcius(value).inFahrenheit(),
        symbol: symbols.fahrenheit,
      },
    });
  }

  static fahrenheit(value) {
    return builder(Temperature.prototype, {
      celcius: {
        value: converter.fahrenheit(value).inCelcius(),
        symbol: symbols.celcius,
      },
      fahrenheit: {
        value,
        symbol: symbols.fahrenheit,
      },
    });
  }
}

module.exports = Temperature;

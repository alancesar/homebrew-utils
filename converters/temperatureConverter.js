module.exports = {
  celcius(value) {
    return {
      inFahrenheit: () => (value * 1.8) + 32,
    };
  },
  fahrenheit(value) {
    return {
      inCelcius: () => (value - 32) / 1.8,
    };
  },
};

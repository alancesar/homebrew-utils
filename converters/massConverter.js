module.exports = {
  grams(value) {
    return {
      inKilograms: () => value / 1000,
      inPounds: () => value * 0.00220462262,
      inOunces: () => value * 0.035274,
    };
  },
  kilograms(value) {
    return {
      inGrams: () => value * 1000,
      inPounds: () => value * 2.20462262,
      inOunces: () => value * 35.274,
    };
  },
  pounds(value) {
    return {
      inGrams: () => value * 453.59237,
      inKilograms: () => value * 0.45359237,
      inOunces: () => value * 16,
    };
  },
  ounces(value) {
    return {
      inGrams: () => value * 28.3495,
      inKilograms: () => value * 0.0283495,
      inPounds: () => value * 0.0625,
    };
  },
};

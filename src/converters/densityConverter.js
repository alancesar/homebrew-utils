export default {
  brix(value) {
    return {
      inSg: () => (value / (258.6 - ((value / 258.2) * 227.1))) + 1,
    };
  },
  sg(value) {
    return {
      inBrix: () => ((((((182.4601 * value) - 775.6821) * value) + 1262.7794) * value) - 669.5622),
    };
  },
};

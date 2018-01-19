module.exports = ({ kgfcm2, temperature }) => {
  const celcius = temperature.celcius.value;
  const bar = kgfcm2 * 0.9806652048;
  const x = (bar * 14.50377) + 14.695;
  const y = 0.01821 + (0.090115 * Math.exp(-((celcius * 1.8) / 43.11)));
  return (x * y) - 0.003342;
};

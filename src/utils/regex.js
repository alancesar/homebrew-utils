export default (value, rules, def = [...rules].shift().method) => {
  if (typeof value === 'number' || value.match(/^\d*\.?\d*$/)) {
    return def(parseFloat(value));
  }

  // TODO Melhorar essa lógica
  let response;

  rules.every((rule) => {
    const { expression, method } = rule;
    const regex = value.toLowerCase().match(expression);

    if (regex) {
      const digit = value.substring(0, regex.index);
      const number = parseFloat(digit);
      response = method(number);
      return false;
    }

    return true;
  });

  return response || new Error('Invalid input.');
};

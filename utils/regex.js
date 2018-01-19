module.exports = (value, rules, def = rules[0].method) => {
  if (typeof value === 'number' || value.match(/^\d*\.?\d*$/)) {
    return def(parseFloat(value));
  }

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

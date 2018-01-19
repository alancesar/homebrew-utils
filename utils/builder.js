module.exports = (prototype, properties = {}, extra = {}) => {
  if (typeof extra === 'function') {
    return Object.assign(prototype, properties, extra(properties));
  }

  return Object.assign(prototype, properties, extra);
};

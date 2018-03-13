module.exports = (prototype, properties = {}, extra = {}) => {
  if (typeof extra === 'function') {
    return Object.assign(Object.create(prototype), properties, extra(properties));
  }

  return Object.assign(Object.create(prototype), properties, extra);
};

export default (prototype, properties = {}, extra = {}) => {
  if (typeof extra === 'function') {
    return { ...Object.create(prototype), ...properties, ...extra(properties) };
  }

  return { ...Object.create(prototype), ...properties, ...extra };
};

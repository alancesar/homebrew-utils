export default (properties = {}, extra = {}) => {
  if (typeof extra === 'function') {
    return { ...properties, ...extra(properties) };
  }

  return { ...properties, ...extra };
};

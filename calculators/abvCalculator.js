module.exports = ({ og, fg }) => {
  const abv = (og.sg.value - fg.sg.value) * 1.3125;
  const attenuation = (og.sg.value - fg.sg.value) / (og.sg.value - 1);

  return {
    abv,
    attenuation,
  };
};

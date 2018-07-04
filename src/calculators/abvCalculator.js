export default ({ og, fg }) => {
  const ogInSg = og.sg.value;
  const fgInSg = fg.sg.value;
  const abv = (((76.08 * (ogInSg - fgInSg)) / (1.775 - ogInSg)) * (fgInSg / 0.794)) / 100;
  const abw = abv * 0.8;
  const attenuation = (ogInSg - fgInSg) / (ogInSg - 1);

  return {
    abv,
    abw,
    attenuation,
  };
};

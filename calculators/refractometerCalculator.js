/* eslint-disable no-restricted-properties */
const Density = require('../models/Density');

module.exports = ({ og, fg }) => {
  const ogInBrix = og.brix.value;
  const fgInBrix = fg.brix.value;
  const fgCorrection = (1 - (0.0044993 * ogInBrix)) +
    (0.011774 * fgInBrix) + ((0.00027581 * Math.pow(ogInBrix, 2)) -
    (0.0012717 * Math.pow(fgInBrix, 2)) - (0.0000072800 * Math.pow(ogInBrix, 3)))
    + (0.000063293 * Math.pow(fgInBrix, 3));

  return new Density(fgCorrection);
};

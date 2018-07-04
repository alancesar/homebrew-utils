import { Density } from '../units/units';

export default ({ og, fg }) => {
  const ogInBrix = og.brix.value;
  const fgInBrix = fg.brix.value;
  const fgCorrection = (1 - (0.0044993 * ogInBrix)) +
    (0.011774 * fgInBrix) + ((0.00027581 * (ogInBrix ** 2)) -
    (0.0012717 * (fgInBrix ** 2)) - (0.0000072800 * (ogInBrix ** 3)))
    + (0.000063293 * (fgInBrix ** 3));

  return new Density(fgCorrection);
};

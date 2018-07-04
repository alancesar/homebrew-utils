import abvCalculator from './abvCalculator';
import colorCalculator from './colorCalculator';
import expectedGravityCalculator from './expectedGravityCalculator';
import ibuCalculator from './ibuCalculator';
import refractometerCalculator from './refractometerCalculator';
import volumeCo2Calculator from './volumeCo2Calculator';

export const abv = input => abvCalculator(input);
export const color = input => colorCalculator(input);
export const expectedGravity = input => expectedGravityCalculator(input);
export const ibu = input => ibuCalculator(input);
export const refractometer = input => refractometerCalculator(input);
export const volumeCo2 = input => volumeCo2Calculator(input);

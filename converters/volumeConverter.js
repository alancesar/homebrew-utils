module.exports = {
  liters(value) {
    return {
      inMilliliters: () => value * 1000,
      inGallons: () => value * 0.264172052,
    };
  },
  milliliters(value) {
    return {
      inLiters: () => value / 1000,
      inGallons: () => value * 0.000264172052,
    };
  },
  gallons(value) {
    return {
      inLiters: () => value * 3.785411789,
      inMilliliters: () => value * 3785.411789,
    };
  },
};

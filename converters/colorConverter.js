module.exports = {
  ebc(value) {
    return {
      inL: () => ((value * 0.508) + 0.76) / 1.3546,
      inSrm: () => value * 0.508,
    };
  },
  l(value) {
    return {
      inEbc: () => ((1.3546 * value) - 0.76) * 1.97,
      inSrm: () => (1.3546 * value) - 0.76,
    };
  },
  srm(value) {
    return {
      inEbc: () => value * 1.97,
      inL: () => (value + 0.76) / 1.3546,
    };
  },
  hex(value) {
    return {
      inRgb: () => {
        const [c1, c2, c3, c4, c5, c6] = value.slice(1);
        const r = parseInt(`${c1}${c2}`, 16);
        const g = parseInt(`${c3}${c4}`, 16);
        const b = parseInt(`${c5}${c6}`, 16);
        return [r, g, b];
      },
    };
  },
};

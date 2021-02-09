export function fixPrice(x) {
  return Number.parseFloat(x).toFixed(2);
}

export function createOptions(min, max) {
  let options = [];
  let i;
  for (i = min; i <= max; i++) {
    options.push({ value: i, label: `${i}` });
  }
  return options;
}

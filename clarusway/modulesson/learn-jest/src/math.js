const fahrenheitToCelsius = (temp) => (temp - 32) / 1.8;

const celsiusToFahrenheit = (temp) => temp * 1.8 + 32;

const calculateTotal = (price, vat = 0.18) => price * (1 + vat);

const fibonacci = (num = 1) => {
  //

  const series = [1, 1];
  for (let i = 2; i < num; i++) {
    const a = series[i - 1];
    const b = series[i - 2];
    series.push(a + b);
  }
  return series[num - 1];
};

module.exports = { calculateTotal, celsiusToFahrenheit, fahrenheitToCelsius, fibonacci};
// Silly fake currency simulator
c.width |= 0;
const currencies = ['ADA', 'ART', 'AUR', 'ADN', 'BTC', 'BTA', 'DIN', 'ETC', 'ETH', 'FST', 'XMR', 'USDT'];
const getCurrentValueForCurrency = (currency) => {
  return 100 * currency.split('').map(c => 0.5 + 0.5 * Math.sin(1 / c.charCodeAt(0) * Date.now() / 3e3)).reduce((a, b) => a + b, 0);
};
currencies.forEach((currency, i) => {
  const value = getCurrentValueForCurrency(currency);
  //console.log(`Currency ${currency} has value ${value}`);
  const height = value * 2;
  x.fillRect(150 * i, 1000 - height, 150, height);
});

// Alternative (some fixed higher than others, no 0s)
const getCurrentValueForCurrency = (currency) => {
  return 100 * currency.split('').map(c => c.charCodeAt(0) / 100 * (1 + 0.5 * Math.sin(1 / c.charCodeAt(0) * Date.now() / 3e0))).reduce((a, b) => a + b, 0);
};


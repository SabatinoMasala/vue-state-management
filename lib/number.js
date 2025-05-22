export function format(num) {
  const currency = useCookie('currency', {
    default() {
      return '$';
    }
  })
  return `${currency.value}${num.toFixed(2)}`;
}

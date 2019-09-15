export default function (value, currencyID) {
  return new Intl.NumberFormat('pt', {
    style: 'currency',
    currency: currencyID
  }).format(value)
}
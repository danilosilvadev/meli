export default function (value) {
  return new Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

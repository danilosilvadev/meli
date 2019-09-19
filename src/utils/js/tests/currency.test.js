import { formatCurrency } from '..'

describe('Currency behavior tests', () => {
  it('should receive a number and a code and delivery the correct formated currency', () => {
    expect(formatCurrency(4570, 'BRL')).toStrictEqual('R$4,570.00')
  })
})

import {
  clearString
} from '..'

describe('clearString behavior tests', () => {
  it('should clear the string using text style', () => {
    expect(clearString.text('dan silva')).toStrictEqual('Dan Silva')
  })

  it('should clear the string using snake case style', () => {
    expect(clearString.snakeCase('dan silva')).toStrictEqual('dan_silva')
  })

  it('should clear the string deliverying only letters', () => {
    expect(clearString.onlyLetters('dan 2 3 . silva')).toStrictEqual('dan silva')
  })

  it('should clear the string deliverying only numbers', () => {
    expect(clearString.onlyNumbers('dan silva 24')).toStrictEqual('24')
  })
})
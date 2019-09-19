import React from 'react'
import { shallow } from 'enzyme'
import { mountList } from '..'

describe('Search Page behavior tests', () => {
  it('should return a list with itens at some page', () => {
    expect(mountList([1, 2, 3, 4, 5, 6], 2)).toStrictEqual([5, 6])
  })
})

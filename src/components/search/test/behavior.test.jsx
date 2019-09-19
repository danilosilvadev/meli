import React from 'react'
import { shallow } from 'enzyme'
import Search from '..'

describe('Search component behavior tests', () => {
  const WrapperShelf = shallow(<Search />)
  it('should click search button and delivery a search term to global state', () => {
    // WrapperShelf.find('.styled__input-test').write('CASA')
    /** test the route history.push(`/items?search=${term}`) */
    //  expect().toStrictEqual(expectedMock)
  })
})

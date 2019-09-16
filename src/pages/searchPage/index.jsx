import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { withRouter, Link } from 'react-router-dom'
import { MobilePagination, DesktopPagination } from '../../components'
import { dispatchSearchResults } from '../../middlewares'
import { getPath } from '../../utils'
import { Context, actionTypes, hooks } from '../../store'

function SearchPage({ history, location }) {
  const [activePage, setActivePage] = useState(1)
  const { error, pending } = hooks()

  const {
    state: { searchResults },
    dispatch,
  } = useContext(Context)

  useEffect(() => {
    dispatchSearchResults(getPath.searchParam()).then(res => {
      if (!res.status) {
        error.update('Alguma coisa deu errado')
        pending.update(false)
      } else {
        error.update('')
        dispatch({
          type: actionTypes.DISPATCH_SEARCH_RESULTS,
          searchResults: res.data,
        })
      }
      pending.update(true)
    })
  }, [])

  return (
    <>
      {error.value === '' && pending.value ? (
        <ul className="c-bg-white m-4">
          {searchResults.length !== 0 ? (
            mountList(searchResults, activePage).map(item => (
              <StyledLi
                key={item.id}
                onClick={() => {
                  dispatch({
                    type: actionTypes.SET_PRODUCT_ID,
                    productID: item.id,
                  })
                }}
                className="f p-top-2 p-bottom-2"
              >
                <Link to={`/items/${item.id}`} className="f clear-link c-black">
                  <img
                    src={item.image}
                    alt="product"
                    width="150px"
                    height="150px"
                  />
                  <aside className="m-top-2 m-left-4 f f-column w-60">
                    <span className="m-bottom-2">{item.price}</span>
                    <span>{item.name}</span>
                  </aside>
                </Link>
              </StyledLi>
            ))
          ) : (
            <h3 className="c-grey-darker p-top-2 p-bottom-2 font-weight-1">
              Nenhum resultado encontrado
            </h3>
          )}
        </ul>
      ) : (
        <h2 className="c-red p-top-2 p-bottom-2 font-weight-1 c-bg-white m-4 p-4">
          {error.value}
        </h2>
      )}
      <ul className="f m-top-2 m-bottom-4 f-justify-center">
        <MobilePagination
          page={{ number: activePage, setPageNumber: setActivePage }}
          StyledLi={StyledLi}
          searchResults={searchResults}
        />
        <DesktopPagination
          page={{ number: activePage, setPageNumber: setActivePage }}
          StyledLi={StyledLi}
          searchResults={searchResults}
        />
      </ul>
    </>
  )
}

const mountList = (fullList, activePage) => {
  let arr = []
  fullList.forEach((v, i) => {
    if (Number.isInteger(i / 4) && i !== 0) {
      arr.push(fullList.slice(i - 4, i))
    }
  })
  return arr[activePage - 1]
}

const StyledLi = styled.li`
  cursor: pointer;
  pointer-events: ${props => (props.item === '...' ? 'none' : 'auto')};
  border-bottom: ${props => (props.item ? 'none' : '1px solid lightGrey')};
  margin-right: 2rem;
  overflow: ${props => (props.item ? 'hidden' : 'none')}
  &:hover {
    background-color: ${props =>
      props.item && !props.isMobile ? 'rgb(192, 192, 192)' : ''};
  }
`

export default withRouter(SearchPage)

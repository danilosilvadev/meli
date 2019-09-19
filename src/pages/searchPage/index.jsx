import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { MobilePagination, DesktopPagination } from '../../components'
import { dispatchSearchResults } from '../../middlewares'
import { getPath, clearString } from '../../utils'
import { Context, actionTypes, hooks, initialState } from '../../store'

function SearchPage({ history }) {
  const initialHook = hooks()

  const {
    state: { searchResults, searchTerm, activeSearchPage },
    dispatch,
  } = useContext(Context)

  useEffect(() => {
    let searchQuery = ''
    if (getPath.atPosition(1) === 'search') {
      searchQuery = getPath.atPosition(2)
      const urlPage = Number(clearString.onlyNumbers(getPath.atPosition(3)))
      dispatch({
        type: actionTypes.SET_ACTIVE_SEARCH_PAGE,
        activeSearchPage: urlPage,
      })
    } else {
      searchQuery = getPath.searchParam()
      dispatch({
        type: actionTypes.SET_ACTIVE_SEARCH_PAGE,
        activeSearchPage: initialState.activeSearchPage,
      })
    }
    if (searchTerm === searchQuery) return
    dispatchSearchResults(searchQuery, dispatch, initialHook)
  }, [])
  return (
    <>
      {initialHook.error.value === '' && !initialHook.pending.value ? (
        <ul className="c-bg-white m-4">
          {searchResults && searchResults.length !== 0 ? (
            mountList(searchResults, activeSearchPage, history).map(item => (
              <StyledLi
                key={item.id}
                className="f p-top-2 p-bottom-2 f-justify-center f-md-justify-start"
                onClick={async () => {
                  await dispatch({
                    type: actionTypes.SET_PRODUCT_ID,
                    productID: item.id,
                  })
                  history.push(`/items/${item.id}`)
                }}
              >
                <div className="f f-column clear-link c-black f-md-row f-align-center">
                  <img
                    src={item.image}
                    alt="product"
                    width="auto"
                    height="auto"
                  />
                  <aside className="m-left-md-4 f f-column w-60 f-align-center f-md-align-start">
                    <span className="m-bottom-2">{item.price}</span>
                    <span>{item.name}</span>
                  </aside>
                </div>
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
          {initialHook.error.value}
        </h2>
      )}
      <ul className="f m-top-2 m-bottom-4 f-justify-center">
        <MobilePagination StyledLi={StyledLi} />
        <DesktopPagination StyledLi={StyledLi} />
      </ul>
    </>
  )
}

export const mountList = (fullList, activePage, history) => {
  if (fullList.length < 5) return fullList
  let arr = []
  fullList.forEach((v, i) => {
    if (Number.isInteger(i / 4) && i !== 0) {
      arr.push(fullList.slice(i - 4, i))
    }
    if (i + 2 === fullList.length) {
      arr.push(fullList.slice(i, fullList.length))
    }
  })
  if (!arr[activePage - 1]) {
    history.push('/not_found')
  }
  return arr[activePage - 1] || []
}

const StyledLi = styled.li`
  cursor: pointer;
  pointer-events: ${props => (props.item === '...' ? 'none' : 'auto')};
  border-bottom: ${props => (props.item ? 'none' : '1px solid lightGrey')};
  margin-right: 2rem;
  min-height: ${props => (props.item ? 'auto' : '90px')};
  overflow: ${props => (props.item ? 'hidden' : 'none')};
  &:hover {
    background-color: ${props =>
      props.item && !props.isMobile ? 'rgb(192, 192, 192)' : ''};
  }
`
export default withRouter(SearchPage)

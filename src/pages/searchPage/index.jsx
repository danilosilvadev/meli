import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { MobilePagination, DesktopPagination } from '../../components'
import { dispatchSearchResults } from '../../middlewares'
import { getPath, clearString } from '../../utils'
import { Context, actionTypes, hooks, initialState } from '../../store'

export default function() {
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

  console.log(activeSearchPage)

  return (
    <>
      {initialHook.error.value === '' && !initialHook.pending.value ? (
        <ul className="c-bg-white m-4">
          {searchResults.length !== 0 && searchResults !== undefined ? (
            mountList(searchResults, activeSearchPage).map(item => (
              <StyledLi
                key={item.id}
                className="f p-top-2 p-bottom-2"
                onClick={() => {
                  dispatch({
                    type: actionTypes.SET_PRODUCT_ID,
                    productID: item.id,
                  })
                }}
              >
                <Link
                  to={`/items/${item.id}`}
                  className="f f-column clear-link c-black f-md-row f-align-center"
                >
                  <img
                    src={item.image}
                    alt="product"
                    width="auto"
                    height="auto"
                  />
                  <aside className="m-left-4 f f-column w-60">
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

const mountList = (fullList, activePage) => {
  if (fullList.length < 5) return fullList
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

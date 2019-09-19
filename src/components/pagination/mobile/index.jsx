import React, { useContext } from 'react'
import { getPath } from '../../../utils'
import { withRouter } from 'react-router-dom'
import { Context, actionTypes } from '../../../store'

function MobilePagination ({ page, StyledLi, searchResults, history }) {
  const {
    dispatch,
    state,
    state: { activeSearchPage }
  } = useContext(Context)

  const next = 'Siguiente'
  const previous = 'Anterior'
  const list = [previous, activeSearchPage, next]
  return list.map(item => (
    <StyledLi
      key={item}
      onClick={() => {
        const searchTerm =
          getPath.length() < 3 ? getPath.searchParam() : getPath.atPosition(2)
        if (item === next && activeSearchPage !== searchResults.length) {
          dispatch({
            ...state,
            type: actionTypes.DISPATCH_SEARCH_RESULTS,
            activeSearchPage: activeSearchPage + 1
          })
          history.replace(`/search/${searchTerm}/_page_${activeSearchPage + 1}`)
        }
        if (item === previous && activeSearchPage > 1) {
          dispatch({
            ...state,
            type: actionTypes.DISPATCH_SEARCH_RESULTS,
            activeSearchPage: activeSearchPage - 1
          })
          history.replace(`/search/${searchTerm}/_page_${activeSearchPage - 1}`)
        }
      }}
      className={`n-md c-grey-darker-3 p-2 ${
        item === activeSearchPage ? 'c-bg-grey-darker' : ''
      }`}
      item={item}
      isMobile
    >
      {item}
    </StyledLi>
  ))
}

export default withRouter(MobilePagination)

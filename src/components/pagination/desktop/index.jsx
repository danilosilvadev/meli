import React, { useContext } from 'react'
import { pagination, getPath } from '../../../utils'
import { withRouter } from 'react-router-dom'
import { Context, actionTypes } from '../../../store'

function DesktopPagination({ StyledLi, history }) {
  const {
    dispatch,
    state,
    state: { activeSearchPage, searchResults },
  } = useContext(Context)
  return pagination(activeSearchPage, Math.ceil(searchResults.length / 4)).map(
    item => (
      <StyledLi
        key={item}
        onClick={() => {
          if (item === '...') return
          dispatch({
            ...state,
            type: actionTypes.SET_ACTIVE_SEARCH_PAGE,
            activeSearchPage: item,
          })
          const searchTerm =
            getPath.length() < 3 ? getPath.searchParam() : getPath.atPosition(2)
          history.replace(`/search/${searchTerm}/_page_${item}`)
        }}
        className={`n f-md c-grey-darker-3 p-2 ${
          item === activeSearchPage ? 'c-bg-grey-darker' : ''
        }`}
        item={item}
      >
        {console.log(activeSearchPage, 'aqui')}
        {item}
      </StyledLi>
    )
  )
}

export default withRouter(DesktopPagination)

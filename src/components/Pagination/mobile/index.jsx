import React from 'react'
import { getPath } from '../../../utils'
import { withRouter } from 'react-router-dom'

function MobilePagination ({ page, StyledLi, searchResults, history }) {
  const next = 'Siguiente'
  const previous = 'Anterior'
  const list = [previous, page.number, next]
  return list.map(item => (
    <StyledLi
      key={item}
      onClick={() => {
        const searchTerm =
          getPath.length() < 3 ? getPath.searchParam() : getPath.atPosition(2)
        if (item === next && page.number !== searchResults.length) {
          history.replace(`/search/${searchTerm}/_page_${page.number + 1}`)
          page.setPageNumber(page.number + 1)
        }
        if (item === previous && page.number > 1) {
          page.setPageNumber(page.number - 1)
          history.replace(`/search/${searchTerm}/_page_${page.number - 1}`)
        }
      }}
      className={`n-md c-grey-darker-3 p-2 ${
        item === page.number ? 'c-bg-grey-darker' : ''
      }`}
      item={item}
      isMobile
    >
      {item}
    </StyledLi>
  ))
}

export default withRouter(MobilePagination)

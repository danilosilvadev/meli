import React from 'react'
import { pagination, getPath } from '../../../utils'
import { withRouter } from 'react-router-dom'

function DesktopPagination({ page, searchResults, StyledLi, history }) {
  return pagination(page.number, Math.ceil(searchResults.length / 4)).map(
    item => (
      <StyledLi
        key={item}
        onClick={() => {
          if (item === '...') return
          page.setPageNumber(item)
          const searchTerm =
            getPath.length() < 3 ? getPath.searchParam() : getPath.atPosition(2)
          history.replace(`/search/${searchTerm}/_page_${item}`)
        }}
        className={`n f-md c-grey-darker-3 p-2 ${
          item === page.number ? 'c-bg-grey-darker' : ''
        }`}
        item={item}
      >
        {item}
      </StyledLi>
    )
  )
}

export default withRouter(DesktopPagination)

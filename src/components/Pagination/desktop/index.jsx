import React from 'react'
import { pagination } from '../../../utils'
import { withRouter } from 'react-router-dom'

function DesktopPagination({
  page,
  searchResults,
  StyledLi,
  history,
  location,
}) {
  return pagination(page.number, Math.ceil(searchResults.length / 4)).map(
    item => (
      <StyledLi
        key={item}
        onClick={() => {
          if (item === '...') return
          console.log(location, history)
          page.setPageNumber(item)
          history.push(`_Desde_${item}`)
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

import React from 'react'

export default function ({ page, StyledLi, searchResults }) {
  const next = 'Siguiente'
  const previous = 'Anterior'
  const list = [previous, page.number, next]
  return list.map(item => (
    <StyledLi
      key={item}
      onClick={() => {
        if (item === next && page.number !== searchResults.length) { page.setPageNumber(page.number + 1) }
        if (item === previous && page.number !== 1) { page.setPageNumber(page.number - 1) }
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

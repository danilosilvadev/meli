export function getPathAtPos (level) {
  return window.location.pathname.split('/')[level]
}

export function getPathLength () {
  return window.location.pathname.split('/').length
}

export function getSearchParam () {
  return window.location.search.match(/=(.*)/)[1]
}

const getPath = {
  atPosition: getPathAtPos,
  length: getPathLength,
  searchParam: getSearchParam
}

export default getPath

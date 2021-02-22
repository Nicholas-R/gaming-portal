import * as TYPES from './types'
const initialState = {
  fetchedChampions: [],
  currentPage: 1,
  perPage: 12,
  totalCount: 0,
  sortValue: 'name',
  searchValue: '',
}

export const championsReduser = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_CHAMPIONS_DATA:
      return {
        ...state,
        fetchedChampions: action.payload.res,
        totalCount: action.payload.totalCount,
      }
    case TYPES.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
    case TYPES.SET_PER_PAGE:
      return {
        ...state,
        perPage: action.payload,
      }
    case TYPES.SET_SORT_VALUE:
      return {
        ...state,
        sortValue: action.payload,
      }
    case TYPES.SET_SEARCH_VALUE:
      return {
        ...state,
        currentPage: 1,
        searchValue: action.payload,
      }
    default:
      return state
  }
}

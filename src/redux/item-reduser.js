import * as TYPES from './types'
const initialState = {
  fetchedItems: [],
  currentItemsPage: 1,
  itemsPerPage: 18,
  totalItemsCount: 0,
}

export const itemsReduser = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_ITEMS_DATA:
      return {
        ...state,
        fetchedItems: action.payload.res,
        totalItemsCount: action.payload.totalItemsCount,
      }
    case TYPES.SET_CURRENT_ITEMS_PAGE:
      return {
        ...state,
        currentItemsPage: action.payload,
      }
    case TYPES.SET_ITEMS_PER_PAGE:
      return {
        ...state,
        itemsPerPage: action.payload,
      }

    default:
      return state
  }
}

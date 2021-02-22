import * as TYPES from './types'

export const fetchChampions = (page, perPage, sortValue, searchValue) => {
  return async dispatch => {
    try {
      const response = await fetch(
        `https://api.pandascore.co/lol/champions?page[size]=${perPage}&page[number]=${page}&sort=${sortValue}&search[name]=${searchValue}&token=zRVYUC2XP4H1UmOGVYON__PHT4qSsmhj-t781PgawDfVt0TstFE`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Total': '',
          },
        }
      )
      const json = await response.json()
      const totalCount = response.headers.get('X-Total')
      const res = json.map(champion => {
        const {id, name, image_url, hp, mp} = champion
        return {id, name, image_url, hp, mp}
      })
      dispatch({
        type: TYPES.FETCH_CHAMPIONS_DATA,
        payload: {res, totalCount},
      })
    } catch (error) {
      throw new Error('что-то не так...', error.message)
    }
  }
}

export const setCurrentPage = page => ({type: TYPES.SET_CURRENT_PAGE, payload: page})
export const setPerPage = perPage => ({type: TYPES.SET_PER_PAGE, payload: perPage})
export const setSortValue = sortValue => ({
  type: TYPES.SET_SORT_VALUE,
  payload: sortValue,
})
export const setSearchValue = searchValue => ({
  type: TYPES.SET_SEARCH_VALUE,
  payload: searchValue,
})

export const fetchItems = (page, itemsPerPage) => {
  return async dispatch => {
    try {
      const response = await fetch(
        `https://api.pandascore.co/lol/items?page[size]=${itemsPerPage}&page[number]=${page}&token=zRVYUC2XP4H1UmOGVYON__PHT4qSsmhj-t781PgawDfVt0TstFE`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Total': '',
          },
        }
      )
      const res = await response.json()
      const totalItemsCount = response.headers.get('X-Total')
      dispatch({
        type: TYPES.FETCH_ITEMS_DATA,
        payload: {res, totalItemsCount},
      })
    } catch (error) {
      throw new Error('что-то не так...', error.message)
    }
  }
}
export const setCurrentItemPage = page => ({
  type: TYPES.SET_CURRENT_ITEMS_PAGE,
  payload: page,
})
export const setItemPerPage = perPage => ({
  type: TYPES.SET_ITEMS_PER_PAGE,
  payload: perPage,
})

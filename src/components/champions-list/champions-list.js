import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {fetchChampions} from '../../redux/actions'
import ChampionsFilter from '../champions-filter'
import ChampionsListItem from '../champions-list-item'
import ChampionsSearch from '../champions-search'
import {NoResultSearch} from '../champions-search/champions-search'
import Loader from '../loader'
import Pagination from '../champions-pagination'

export default function ChampionsList() {
  const dispatch = useDispatch()
  const currentPage = useSelector(state => state.champions.currentPage)
  const perPage = useSelector(state => state.champions.perPage)
  const sortValue = useSelector(state => state.champions.sortValue)
  const searchValue = useSelector(state => state.champions.searchValue)
  const fetchedChampionsData = useSelector(state => state.champions.fetchedChampions)
  useEffect(() => {
    dispatch(fetchChampions(currentPage, perPage, sortValue, searchValue))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, sortValue, searchValue])

  if (!fetchedChampionsData[0] && !searchValue) {
    return <Loader />
  }
  return (
    <>
      <div className="d-flex justify-content-between">
        <ChampionsFilter />
        <ChampionsSearch />
      </div>
      {!fetchedChampionsData[0] && searchValue ? (
        <NoResultSearch />
      ) : (
        <>
          <ChampionsListItem championsData={fetchedChampionsData} />
          <Pagination />
        </>
      )}
    </>
  )
}

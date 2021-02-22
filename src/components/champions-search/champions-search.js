import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {setSearchValue} from '../../redux/actions'

export function ChampionsSearch() {
  const dispatch = useDispatch()
  const searchValue = useSelector(state => state.champions.searchValue)
  return (
    <>
      <form className="form-inline my-2 my-lg-0">
        <input
          onChange={event => dispatch(setSearchValue(event.target.value))}
          value={searchValue}
          className="form-control me-2"
          type="search"
          placeholder="Поиск чемпиона"
          aria-label="Search"
        />
      </form>
    </>
  )
}

export const NoResultSearch = () => {
  const searchValue = useSelector(state => state.champions.searchValue)
  return (
    <div className="jumbotron mt-3 champions rounded">
      <div className="container">
        <h1 className="display-4">Упс...</h1>
        <p className="lead">Поиск по слову "{searchValue}" не дал результатов</p>
      </div>
    </div>
  )
}

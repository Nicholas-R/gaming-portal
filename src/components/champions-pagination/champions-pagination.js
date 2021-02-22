import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentPage} from '../../redux/actions'

export default function Pagination() {
  const dispatch = useDispatch()
  const currentPage = useSelector(state => state.champions.currentPage)
  const totalCount = useSelector(state => state.champions.totalCount)
  const perPage = useSelector(state => state.champions.perPage)

  const maxPages = Math.ceil(totalCount / perPage)
  const pages = [...Array(maxPages).keys()].map(e => e + 1)

  return (
    <>
      <nav className="custom-pagination">
        <ul className="pagination">
          {pages.map((page, i) => {
            return (
              <li
                key={i}
                className={currentPage === page ? 'page-item active' : 'page-item'}
              >
                <span
                  onClick={() => dispatch(setCurrentPage(page))}
                  className="page-link"
                >
                  {page}
                </span>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

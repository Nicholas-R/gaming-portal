import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentItemPage} from '../../redux/actions'

export default function ItemsPagination() {
  const dispatch = useDispatch()
  const currentPage = useSelector(state => state.items.currentItemsPage)
  const totalCount = useSelector(state => state.items.totalItemsCount)
  const perPage = useSelector(state => state.items.itemsPerPage)

  const maxPages = Math.ceil(totalCount / perPage)
  const pages = [...Array(maxPages).keys()].map(e => e + 1)

  return (
    <>
      <nav className="custom-pagination" aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page, i) => {
            return (
              <li
                key={i}
                className={currentPage === page ? 'page-item active' : 'page-item'}
              >
                <span
                  onClick={() => dispatch(setCurrentItemPage(page))}
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

import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {fetchItems} from '../../redux/actions'
import ItemsListItem from '../items-list-item/items-list-item'
import ItemsPagination from '../items-pagination'

export default function ItemsList() {
  const dispatch = useDispatch()
  const fetchedItems = useSelector(state => state.items.fetchedItems)
  const itemsPerPage = useSelector(state => state.items.itemsPerPage)
  const currentItemsPage = useSelector(state => state.items.currentItemsPage)
  const totalItemsCount = useSelector(state => state.items.totalItemsCount)
  console.log(totalItemsCount)
  useEffect(() => {
    dispatch(fetchItems(currentItemsPage, itemsPerPage))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentItemsPage])
  console.log(fetchedItems)
  console.log(totalItemsCount)
  return (
    <>
      <ItemsListItem itemsData={fetchedItems} />
      <ItemsPagination />
    </>
  )
}

import React from 'react'

export default function ItemsDescription({data}) {
  return (
    <>
      <ul className="list-group list-group-flush rounded item-descr">
        {data.map((descr, i) => (
          <li key={i} className="list-group-item champions-stats__item p-1">
            {descr}
          </li>
        ))}
      </ul>
    </>
  )
}

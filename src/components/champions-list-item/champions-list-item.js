//import React, {useEffect, useState} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'

import './champions-list-item.scss'

export const ChampionsListItem = ({championsData}) => {
  return (
    <div className="p-5 mb-3 mt-3 d-flex align-items-stretch flex-wrap champions rounded">
      {championsData.map(e => (
        <div key={e.id} className="text-center mb-5 champions-wrap">
          <Link className="text-light champions-link" to={`/champions/${e.id}`}>
            <h5 className="card-title text-center">{e.name}</h5>
            <div className="champions-content">
              <div className="champions-block">
                <img className="rounded mb-1 champions-img" src={e.image_url} alt="" />
                <span className="champions-bar mb-1 champions-bar__hp">{e.hp}</span>
                <span className="champions-bar mb-1 champions-bar__mp">{e.mp}</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

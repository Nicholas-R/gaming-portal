import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <span className="navbar-brand">GamePortal</span>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lol">
                League of Legends
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/champions">
                Champions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/items">
                Items
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

import UserLink from '../container/user-link'

import {
  HOME_PAGE_ROUTE,
  LISTINGS_INDEX,
  LISTINGS_CREATE,
} from '../routes'

const Nav = () => {
  return (
    <nav className="main-nav navbar">
      <section className="navbar-section">
        <NavLink
          to={HOME_PAGE_ROUTE}
          className="logo"
          exact
        />
      </section>
      <section className="navbar-section">
        {[
          { route: LISTINGS_INDEX, label: 'Listings' },
          { route: LISTINGS_CREATE, label: 'Be a Host' },
        ].map((link) => {
          return (
            <NavLink
              key={link.label}
              to={link.route}
              className="btn btn-link mr-10"
              exact
            >
              {link.label}
            </NavLink>
          )
        })}
        <UserLink className="btn btn-link" />
      </section>
    </nav>
  )
}

export default Nav

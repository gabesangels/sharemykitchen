import React from 'react'
import { NavLink } from 'react-router-dom'

import LoginLink from '../container/login-link'

import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  NOT_FOUND_DEMO_PAGE_ROUTE,
  LISTINGS_INDEX,
  LISTINGS_CREATE,
} from '../routes'

const Nav = () => {
  return (
    <nav>
      <ul className = "breadcrumb text-center">
        {[
          { route: HOME_PAGE_ROUTE, label: 'Home' },
          { route: LISTINGS_INDEX, label: 'listings' },
          { route: LISTINGS_CREATE, label: 'Create a listing' },
          { route: NOT_FOUND_DEMO_PAGE_ROUTE, label: '404 Demo' },
        ].map((link) => {
          return (
            <li className = "breadcrumb-item" key={link.route}>
              <NavLink to={link.route} activeStyle={{ color: 'limegreen' }} exact>{link.label}</NavLink>
            </li>
          )
        })}
        <li className = "breadcrumb-item">
          <LoginLink />
        </li>
      </ul>
    </nav>
  )
}

export default Nav

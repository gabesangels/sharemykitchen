import React from 'react'

import Profile from '../../container/profile'
import ListingsList from '../../container/listing-list'

import { AUTH_LOGOUT } from '../../routes'

const ProfilePage = () => {
  return (
    <div>
      <h1 
        className="text-center"
      >
        Profile Page
      </h1>
      <Profile />
      <a 
        className="btn btn-primary" 
        href={`/auth${AUTH_LOGOUT}`}
      >
        Logout
      </a>
      <ListingsList />
    </div>
  )
}

export default ProfilePage

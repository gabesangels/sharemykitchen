import React from 'react'

import Profile from '../../container/profile'
import ListingsList from '../../container/ListingList'

const ProfilePage = () => {
  return (
    <div>
      <h1 className="text-center">Profile Page</h1>
      <Profile />
      <a className="btn btn-primary" href="/auth/logout">Logout</a>
      <ListingsList />
    </div>
  )
}

export default ProfilePage

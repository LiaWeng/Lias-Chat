import React, { useState } from 'react'

import Sidebar from './Sidebar'
import Popup from './Popup'

const Dashboard = () => {
  // const user = useSelector(({ user }) => user)

  return (
    <div>
      <Sidebar />
      <Popup />
    </div>
  )
}

export default Dashboard

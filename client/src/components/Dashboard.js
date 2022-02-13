import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'

import Sidebar from './Sidebar/Sidebar'
// import Popup from './Popup/Popup'
import AddConversation from './Popup/AddConversation'
import AddContact from './Popup/AddContact'

const Dashboard = () => {
  // const user = useSelector(({ user }) => user)
  const tabValue = useSelector(({ tab }) => tab)

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={4} md={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={0} sm={8} md={9}>
          <div>hi</div>
        </Grid>
      </Grid>

      {tabValue === 0 && <AddConversation />}
      {tabValue === 1 && <AddContact />}
      {/* <Popup /> */}
    </>
  )
}

export default Dashboard

import React, { useState } from 'react'
import { Grid } from '@mui/material'

import Sidebar from './Sidebar/Sidebar'
import Popup from './Popup'

const Dashboard = () => {
  // const user = useSelector(({ user }) => user)

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
      <Popup />
    </>
  )
}

export default Dashboard

import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import { AppBar } from '../appbar'
import { LeftDrawer } from '../drawer'

export const Navigation = () => {
  const [open, setOpen] = React.useState(false)

  return <>
    <CssBaseline />
    <AppBar setOpen={setOpen} open={open} />
    <LeftDrawer setOpen={setOpen} open={open} />
  </>
}

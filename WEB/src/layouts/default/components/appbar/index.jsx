import clsx from 'clsx'
import { AppBar as MaterialAppBar } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

import { useStyles } from './styles'
import { Toolbar } from './toolbar'

export const AppBar = ({ open, setOpen }) => {
  const classes = useStyles()

  return <MaterialAppBar position={'absolute'} className={clsx(classes.appBar, open && classes.appBarShift)}>
    <Toolbar setOpen={setOpen} classes={classes} open={open} />
  </MaterialAppBar>
}

AppBar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

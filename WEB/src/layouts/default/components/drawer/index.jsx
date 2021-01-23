import Drawer from '@material-ui/core/Drawer'
import clsx from 'clsx'
import Divider from '@material-ui/core/Divider'
import React from 'react'
import PropTypes from 'prop-types'

import { MenuItems } from './menu'
import { useStyles } from './styles'
import { Icon } from './icon'

const buildDrawerProps = (open, classes) => ({
  variant: 'permanent',
  classes: { paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose) },
  open,
})

export const LeftDrawer = ({ open, setOpen }) => {
  const classes = useStyles()

  return <Drawer {...buildDrawerProps(open, classes)}>
    <Icon classes={classes} setOpen={setOpen} />
    <Divider />
    <MenuItems />
  </Drawer>
}

LeftDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

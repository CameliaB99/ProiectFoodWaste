import { Toolbar as MaterialToolbar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { Logo } from './logo'

const buildButtonProps = ({ open, setOpen, classes }) => ({
  edge: 'start',
  color: 'inherit',
  'aria-label': 'open drawer',
  className: clsx(classes.menuButton, open && classes.menuButtonHidden),
  onClick: () => setOpen(() => true),
})

export const Toolbar = ({ open, setOpen, classes }) => <MaterialToolbar className={classes.toolbar}>
  <IconButton {...buildButtonProps({ open, setOpen, classes })}>
    <MenuIcon />
  </IconButton>
  <Logo classes={classes} />
</MaterialToolbar>

Toolbar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

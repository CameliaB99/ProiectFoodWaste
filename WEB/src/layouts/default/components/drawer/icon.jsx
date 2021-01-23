import { IconButton as MaterialButton } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import React from 'react'
import PropTypes from 'prop-types'

export const Icon = ({ classes, setOpen }) => <div className={classes.toolbarIcon}>
  <MaterialButton onClick={() => setOpen(() => false)}>
    <ChevronLeftIcon />
  </MaterialButton>
</div>

Icon.propTypes = {
  classes: PropTypes.object.isRequired,
  setOpen: PropTypes.func.isRequired,
}

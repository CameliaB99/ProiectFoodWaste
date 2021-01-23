import ListItemIcon from '@material-ui/core/ListItemIcon'
import React from 'react'
import PropTypes from 'prop-types'
import ListItemText from '@material-ui/core/ListItemText'

export const ItemContent = ({ children, displayName }) => <>
  <ListItemIcon>
    {children}
  </ListItemIcon>
  <ListItemText primary={displayName} />
</>

ItemContent.propTypes = {
  children: PropTypes.node.isRequired,
  displayName: PropTypes.string.isRequired,
}

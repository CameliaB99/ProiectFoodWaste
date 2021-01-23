import { useHistory, useLocation } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import PropTypes from 'prop-types'
import React from 'react'

import { ItemContent } from './item-content'

const useItemProps = path => {
  const history = useHistory()
  const { pathname } = useLocation()

  return {
    button: true,
    selected: pathname === path,
    onClick: () => history.push(path),
  }
}

export const Item = ({ children, path, displayName }) => <ListItem {...useItemProps(path)}>
  <ItemContent displayName={displayName}>
    {children}
  </ItemContent>
</ListItem>

Item.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'

import { useStyles } from './use-styles'
import { Content } from './components/content'
import { Navigation } from './components/navigation'

export const DefaultLayout = ({ children }) => {
  const classes = useStyles()

  return <div className={classes.root}>
    <Navigation />
    <Content content={children} />
  </div>
}

DefaultLayout.propTypes = { children: PropTypes.node.isRequired }

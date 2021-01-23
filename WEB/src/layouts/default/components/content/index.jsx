import React from 'react'
import PropTypes from 'prop-types'

import { useStyles } from './styles'
import { Container } from './container'

export const Content = ({ content }) => {
  const classes = useStyles()

  return <main className={classes.content}>
    <div className={classes.spacer} />
    <Container classes={classes} content={content} />
  </main>
}

Content.propTypes = { content: PropTypes.node.isRequired }

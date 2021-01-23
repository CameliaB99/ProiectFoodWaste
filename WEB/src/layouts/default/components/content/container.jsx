import { Container as MaterialContainer } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import PropTypes from 'prop-types'

const buildContainerProps = classes => ({
  disableGutters: true,
  maxWidth: 'lg',
  className: classes.container,
})

export const Container = ({ classes, content }) => <MaterialContainer {...buildContainerProps(classes)}>
  <Grid container>
    {content}
  </Grid>
</MaterialContainer>

Container.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.node.isRequired,
}

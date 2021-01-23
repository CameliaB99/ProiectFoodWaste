import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

export const Logo = ({ classes }) => <>
  <Typography component={'h1'} variant={'h6'} color={'inherit'} noWrap className={classes.title}>
    Waste Reduction
  </Typography>
</>

Logo.propTypes = { classes: PropTypes.object.isRequired }

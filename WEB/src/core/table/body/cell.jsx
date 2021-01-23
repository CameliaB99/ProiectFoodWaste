import { Hidden, TableCell, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import * as PropTypes from 'prop-types'

import { useAlignment } from '../use-alignment'
import { Value } from './value'

export const Cell = ({ value, column }) => {
  const style = useStyle()

  return <Hidden only={column.hideOn}>
    <TableCell align={useAlignment(column)} style={style}>
      <Value column={column} value={value} />
    </TableCell>
  </Hidden>
}

const buildStyle = shouldSetWidth => ({
  borderBottom: 'none',
  height: 56,
  ...shouldSetWidth && { maxWidth: 100 },
})

const useStyle = () => {
  const theme = useTheme()
  const shouldSetWidth = useMediaQuery(theme.breakpoints.between('xs', 'sm'))

  return buildStyle(shouldSetWidth)
}

Cell.propTypes = {
  column: PropTypes.object.isRequired,
  value: PropTypes.object.isRequired,
}

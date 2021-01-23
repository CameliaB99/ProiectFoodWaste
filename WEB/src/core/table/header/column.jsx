import React from 'react'
import * as PropTypes from 'prop-types'
import { Hidden, TableCell } from '@material-ui/core'

import { useAlignment } from '../use-alignment'
import { Label } from './label'

export const Column = ({ column }) => <Hidden only={column.hideOn}>
  <TableCell align={useAlignment(column)} style={{
    height: 56,
    padding: 0,
  }}>
    <Label column={column} />
  </TableCell>
</Hidden>

Column.propTypes = { column: PropTypes.object.isRequired }

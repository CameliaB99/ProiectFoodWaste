import { Box, Collapse, TableCell, TableRow } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import { isEqual } from 'lodash'

import { useTableContext } from '../context'

export const Expansion = ({ value }) => {
  const { ExpandedRow, expanded, isExpandable, columns } = useTableContext()
  const background = 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.02) 50%, rgba(0,0,0,0) 100%)'

  return <TableRow style={{ background }}>
    <TableCell padding={'none'} colSpan={columns.length} style={{ borderBottom: 'none' }}>
      <Collapse in={isEqual(expanded, value) && isExpandable} exit={!isEqual(expanded, value) && isExpandable}>
        <Box p={2}>
          <ExpandedRow value={value} />
        </Box>
      </Collapse>
    </TableCell>
  </TableRow>
}

Expansion.propTypes = { value: PropTypes.object.isRequired }

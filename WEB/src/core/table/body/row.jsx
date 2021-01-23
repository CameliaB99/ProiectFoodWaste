import { TableRow } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

import { Cell } from './cell'
import { useTableContext } from '../context'

const backgrounds = {
  expanded: 'rgba(0,0,0,0.05)',
  notExpanded: index => index % 2 ? '' : 'rgb(247,247,247)',
}

const useStyle = ({ value, index }) => {
  const { expanded } = useTableContext()
  const cursor = { cursor: 'pointer' }
  const background = { background: expanded === value ? backgrounds.expanded : backgrounds.notExpanded(index) }

  return { ...cursor, ...background }
}

export const Row = ({ value, columns, index }) => {
  const { onClick } = useTableContext()

  return <>
    <TableRow hover onClick={onClick} style={useStyle({ value, index })}>
      {
        columns.map((column, index) => <Cell key={`column.${index}`} column={column} value={value} />)
      }
    </TableRow>
  </>
}

Row.propTypes = {
  value: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
}

import { TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import * as PropTypes from 'prop-types'

import { Column } from './column'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({ root: { backgroundColor: theme.palette.secondary.main } }))

export const Index = ({ columns }) => {
  const classes = useStyles()

  return <TableHead>
    <TableRow className={classes.root}>
      {columns.map((column, index) => <Column key={`column.${index}`} column={column} />)}
    </TableRow>
  </TableHead>
}

Index.propTypes = { columns: PropTypes.array.isRequired }

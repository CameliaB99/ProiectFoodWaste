import React from 'react'
import PropTypes from 'prop-types'
import { Box, Table as MaterialTable } from '@material-ui/core'
import { isEmpty } from 'lodash'

import { Index as Header } from './header/index'
import { Index as Body } from './body/index'
import { TableContext, useDefaultTableContext, useTableContext } from './context'
import { Empty } from './body/empty'

const Content = () => {
  const context = useTableContext()

  return <Box hidden={isEmpty(context.page)}>
    <MaterialTable>
      <Header {...context} />
      <Body {...context} />
    </MaterialTable>
  </Box>
}

export const Table = props => {
  const context = useDefaultTableContext(props)

  return <TableContext.Provider value={context}>
    <Content />
    <Empty />
  </TableContext.Provider>
}

const column = PropTypes.shape({
  key: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  renderValue: PropTypes.func,
  align: PropTypes.oneOf(['left', 'right', 'center']),
})

Table.defaultProps = {
  sizes: [5, 10, 25, 50, 100],
  emptyMessage: 'Tabelul nu conține nici un fel de date...',
  onClickRow: () => null,
}

Table.propTypes = {
  page: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(column).isRequired,
  emptyMessage: PropTypes.string,
  onClickRow: PropTypes.func,
}

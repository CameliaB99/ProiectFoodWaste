import PropTypes from 'prop-types'
import { TableBody } from '@material-ui/core'
import React from 'react'

import { Row } from './row'

export const Index = ({ page, columns }) => <TableBody>
        {
            page.map((value, index) => <Row key={`row.${index}`} {...{
                value,
                columns,
                index
            }} />)
        }
    </TableBody>

Index.propTypes = {
  page: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
}

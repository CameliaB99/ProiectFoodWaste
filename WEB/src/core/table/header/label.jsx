import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

import { useAlignment } from '../use-alignment'

export const Label = ({ column }) => {
  const alignment = useAlignment(column, { left: 'flex-start', right: 'flex-end' })
  const style = { height: 56, padding: 0, paddingLeft: 16, paddingRight: 16, justifyContent: alignment, color: 'white' }

  return <Button fullWidth style={style}>
    {column.header}
  </Button>
}

Label.propTypes = {
  column: PropTypes.object.isRequired,
}

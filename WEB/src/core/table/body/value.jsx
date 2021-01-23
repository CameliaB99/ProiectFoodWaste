import React from 'react'
import { get } from 'lodash'
import PropTypes from 'prop-types'

const getDataForKeys = (value, keys) => {
  const result = []
  keys.map(key => result.push({ key, value: get(value, key) }))

  return result
}

const getData = (value, { key, keys }) => keys ? getDataForKeys(value, keys) : get(value, key)

export const Value = ({ column, value }) => {
  if (column.renderValue) {
    return <>{column.renderValue(getData(value, column))}</>
  }

  return <>{getData(value, column)}</>
}

Value.propTypes = {
  column: PropTypes.object.isRequired,
  value: PropTypes.object.isRequired,
}

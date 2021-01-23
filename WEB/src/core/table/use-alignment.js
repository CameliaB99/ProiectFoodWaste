import { last } from 'lodash'

import { useTableContext } from './context'

export const useAlignment = column => {
  const { columns } = useTableContext()
  const isLast = column.key === last(columns).key

  return isLast ? 'center' : column.align || 'left'
}

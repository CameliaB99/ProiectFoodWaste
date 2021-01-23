import { useTableContext } from './context'

export const useHeight = () => {
  const { page } = useTableContext()
  const rowHeight = 56

  return rowHeight * page.length + rowHeight - 3
}

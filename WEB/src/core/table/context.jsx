import { createContext, useContext } from 'react'

export const TableContext = createContext({})

export const useTableContext = () => useContext(TableContext)

export const useDefaultTableContext = props => ({...props})

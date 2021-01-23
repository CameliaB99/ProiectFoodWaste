import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import React from 'react'

export const items = [
  {
    displayName: 'Comenzi',
    path: '/commands',
    renderIcon: () => <ShoppingCartIcon />,
  },
  {
    displayName: 'Prieteni',
    path: '/friends',
    renderIcon: () => <PeopleIcon />,
  },
  {
    displayName: 'Alimente',
    path: '/groceries',
    renderIcon: () => <FastfoodIcon />,
  },
]

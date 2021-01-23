import React from 'react'

import { items } from './items'
import { Item } from './item'
import { List } from '@material-ui/core'

export const MenuItems = () => <List>
  <div>
    {items.map(item => <Item key={item.displayName} displayName={item.displayName} path={item.path}>
      {item.renderIcon()}
    </Item>)}
  </div>
</List>

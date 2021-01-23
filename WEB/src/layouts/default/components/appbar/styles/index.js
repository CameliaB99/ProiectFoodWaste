import { makeStyles } from '@material-ui/core/styles'
import { appBarStyles } from './appbar-styles'
import { menuStyles } from './menu-styles'

export const useStyles = makeStyles(theme => {
  const drawerWidth = 240

  return {
    ...appBarStyles(theme, drawerWidth),
    ...menuStyles(),
  }
})

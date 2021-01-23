import { makeStyles } from '@material-ui/core/styles'

import { toolbarStyles } from './toolbar-styles'
import { paperStyles } from './paper-styles'

export const useStyles = makeStyles(theme => ({
  ...toolbarStyles(theme),
  ...paperStyles(theme),
}))

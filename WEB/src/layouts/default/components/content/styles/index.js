import { makeStyles } from '@material-ui/core/styles'

import { containerStyles } from './container-styles'
import { contentStyles } from './content-styles'

export const useStyles = makeStyles(theme => ({
  ...containerStyles(theme),
  ...contentStyles(),
}))

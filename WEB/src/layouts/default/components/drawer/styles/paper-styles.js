const buildTransitions = theme => theme.transitions.create('width', {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.enteringScreen,
})

const buildDrawerPaperStyles = (theme, drawerWidth) => ({
  position: 'relative',
  whiteSpace: 'nowrap',
  width: drawerWidth,
  transition: buildTransitions(theme),
})

const buildPaperCloseStyles = theme => ({
  overflowX: 'hidden',
  transition: buildTransitions(theme),
  width: theme.spacing(7),
  [theme.breakpoints.up('sm')]: { width: theme.spacing(9) },
})

const buildPaperStyles = theme => ({
  padding: theme.spacing(2),
  display: 'flex',
  overflow: 'auto',
  flexDirection: 'column',
})

export const paperStyles = (theme, drawerWidth = 240) => ({
  drawerPaper: buildDrawerPaperStyles(theme, drawerWidth),
  drawerPaperClose: buildPaperCloseStyles(theme),
  paper: buildPaperStyles(theme),
})

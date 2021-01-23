const buildAppBarStyles = theme => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: theme.palette.secondary.main,
})

const buildAppBarShiftStyles = (theme, drawerWidth) => ({
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
})

export const appBarStyles = (theme, drawerWidth) => ({
  appBar: buildAppBarStyles(theme),
  appBarShift: buildAppBarShiftStyles(theme, drawerWidth),
  appBarSpacer: theme.mixins.toolbar,
})

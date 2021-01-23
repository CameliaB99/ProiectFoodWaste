const buildToolbarIconStyles = theme => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  minHeight: '200px',
  padding: '0 8px',
  ...theme.mixins.toolbar,
})

const buildToolbarStyles = theme => ({
  toolbar: { paddingRight: 24 },
  toolbarAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  toolbarIcon: buildToolbarIconStyles(theme),
})

export const toolbarStyles = theme => ({
  ...buildToolbarStyles(theme),
  ...buildToolbarIconStyles(theme),
})

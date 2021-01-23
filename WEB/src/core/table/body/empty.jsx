import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { isEmpty } from 'lodash'

import { useTableContext } from '../context'
import { useHeight } from '../use-height'

export const Empty = () => {
  const context = useTableContext()

  return <Box hidden={!isEmpty(context.page) || context.isLoading}>
    <Grid container justify={'center'} alignItems={'center'} style={{ height: useHeight() }}>
      <Grid item>
        <Typography color={'textSecondary'}>{context.emptyMessage}</Typography>
      </Grid>
    </Grid>
  </Box>
}

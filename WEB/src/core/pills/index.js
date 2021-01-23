import React from 'react'
import PropTypes from 'prop-types'

import NavPills from '../material-kit/components/NavPills/NavPills'

export const Pills = ({ tabs }) => <NavPills tabs={tabs} color={'rose'} />

Pills.propTypes = { tabs: PropTypes.array.isRequired }

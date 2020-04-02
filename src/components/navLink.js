import React from 'react'
import { Link } from '@reach/router'

import { colors } from './colors'

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? colors.genericHover : colors.genericLight
        }
      }
    }}
  />
)

export default NavLink

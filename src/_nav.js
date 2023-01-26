import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'VCC',
    to: '/dashboard',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Complaints Matrix',
        to: '/#',
      },
      {
        component: CNavItem,
        name: 'Traceability Matrix',
        to: '/#',
      },
      {
        component: CNavItem,
        name: 'DV1 Status',
        to: '/#',
      },
      {
        component: CNavItem,
        name: 'DV2 Status',
        to: '/#',
      },
      {
        component: CNavItem,
        name: 'PV Status',
        to: '/#',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Vertex',
    to: '/dashboard',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Complaints Matrix',
        to: '/#',
      },
      {
        component: CNavItem,
        name: 'Traceability Matrix',
        to: '/#',
      },
      {
        component: CNavItem,
        name: 'DV1 Status',
        to: '/#',
      },
      {
        component: CNavItem,
        name: 'DV2 Status',
        to: '/#',
      },
      {
        component: CNavItem,
        name: 'PV Status',
        to: '/#',
      },
    ],
  }
]

export default _nav

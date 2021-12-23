import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core'

import { ShoppingCart } from '@material-ui/icons'
import useStyle from './styles'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
const Navbar = ({ total_items }) => {
  const location = useLocation()
  const classes = useStyle()
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography
            variant='h6'
            className='classes.title classes.link'
            color='inherit'
            component={Link}
            to='/'
          >
            <img src={logo} alt='Commerce.js' height='25px' /> Femmyte Store
          </Typography>
          <div className={classes.grow}></div>
          {location.pathname === '/' && (
            <div className={classes.button}>
              <IconButton
                aria-label='Show Cart items'
                color='inherit'
                component={Link}
                to='/cart'
              >
                <Badge badgeContent={total_items} color='secondary'>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar

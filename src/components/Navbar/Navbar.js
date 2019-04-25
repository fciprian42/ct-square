import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'

import styles from './Navbar.scss'

const Navbar = ({}) => (
    <AppBar position='static'>
        <Toolbar className={styles.header}>
            <Link to='/'>
                <IconButton color='inherit' className={styles.iconMenu}>
                    <FontAwesomeIcon icon={['fal', 'home']} />
                </IconButton>
            </Link>
            <Typography variant="h6" color="inherit">Gestionnaire de contacts <FontAwesomeIcon icon={['fal', 'address-book']} /></Typography>
            <Link to='/add'>
                <IconButton color='inherit'>
                    <FontAwesomeIcon icon={['fal', 'plus']} />
                </IconButton>
            </Link>
        </Toolbar>
    </AppBar>
)

export default Navbar
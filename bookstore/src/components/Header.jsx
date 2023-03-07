import React, { useState } from 'react'
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [active, setActive] = useState(0)
    return (
        <div>
            <AppBar sx={{ backgroundColor: '#122454' }} position='sticky'>
                <Toolbar>
                    <Typography>
                        <LibraryBooksIcon sx={{ cursor: 'pointer' }} />
                    </Typography>
                    <Tabs sx={{ ml: 'auto' }} textColor='inherit' value={active} onChange={(e, i) => (setActive(i))}>
                        <Tab label='User' LinkComponent={NavLink} to='/' />
                        <Tab label='Admin' LinkComponent={NavLink} to='/update' />
                        <Tab label='Add' LinkComponent={NavLink} to='/add' />
                    </Tabs>
                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Header
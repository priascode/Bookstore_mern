import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import {NavLink } from'react-router-dom';
const Header = () => {
   
    const [value, setValue] = useState();
  return (
    <div>
      <AppBar position ="sticky">
        <Toolbar>
        <Typography>bookstore</Typography>
        <Tabs sx={{ml:'auto'}} textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)}>
            <Tab LinkComponent={NavLink} to="/add" label='AddProduct'></Tab>
            <Tab LinkComponent={NavLink} to="/books" label='Books'></Tab>
            <Tab LinkComponent={NavLink} to="/about"label='About us'></Tab>
            
        </Tabs>
        </Toolbar> 
      </AppBar>
    </div>
  )
}

export default Header;

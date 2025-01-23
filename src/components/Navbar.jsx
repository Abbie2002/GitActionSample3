import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar style={{backgroundColor: 'black',margin: '0px'}}>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PRODUCT APP
        </Typography>
        <Link to={'/'}><Button style={{color:'red'}}>Home</Button></Link>
        <Link to={'/addprods'}><Button style={{color:'red'}}>ADDProducts</Button></Link>
          
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default Navbar
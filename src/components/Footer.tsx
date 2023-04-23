import { AppBar, Box, Toolbar, Typography } from '@mui/material'

function Footer() {
  return (
    <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 ,mt:10}}>
    <Toolbar>
 
        <Box sx={{ flexGrow: 1,display:'flex'}}    >   <Typography>WALEESIN</Typography></Box>
        <Box sx={{ flexGrow: 0,display:'flex'}}>  <Typography>© 2023 finalve.github.io</Typography></Box>
 
      
   
    </Toolbar>
  </AppBar>
  )
}

export default Footer

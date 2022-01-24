import React from "react"


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { FaDiscord, FaTwitter ,FaHome} from "react-icons/fa";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import { Button } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Header: React.FC = () =>
{

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
  {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () =>
  {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () =>
  {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  

  
  const history = useHistory();

  function handleHome()
  {
    history.push("/MintPage");
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
       
      <MenuItem>
      
        
       
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">

          <MailIcon />

        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" style={{ boxShadow: 'none', backgroundColor: 'transparent' }} >
          <Toolbar>



            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            
            <Button onClick={ handleHome }   variant="contained" style={{ height :'40px',fontFamily:'Dongle', letterSpacing:'1px' , fontSize:'1.5rem',backgroundColor:'#000000ff',marginRight:'30px'}} >
            MINT PAGE
          </Button>
          
              <IconButton size='medium' aria-label="show 4 new mails" color="inherit">
                <FaDiscord />

              </IconButton>
              <IconButton
               size='medium' 
                aria-label="show 17 new notifications"
                color="inherit"
              >

                <FaTwitter />

              </IconButton>
             
              <IconButton
                size='medium' 
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Link to='/'  >
                 <FaHome />
                 </Link>
              </IconButton>
             
            </Box>
            
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );

}





export default Header;
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CodeIcon from '@mui/icons-material/Code';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Register from 'features/Auth/components/RegisterForm';
import Login from 'features/Auth/components/Login';
import { AccountCircle, Close } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuItem } from '@mui/material';
import { logout } from 'features/Auth/userSlice';
import { cartItemsCountSelector } from 'features/Cart/selectors';

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
}

export default function Header() {
  const navLinkStyle = { color: '#fff', textDecoration: 'none' };

  const dispatch = useDispatch();
  const loggedInUser = useSelector(state => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const cartItemsCount = useSelector(cartItemsCountSelector)
  // const location =useLocation();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleCloseMenu = ()=>{
    setAnchorEl(null);
  }
  const handleLogoutClick = () =>{
    // dispatch(Logout())
    handleCloseMenu();
    const action = logout();
    dispatch(action);
  }
  const handleCartClick = () =>{
    navigate('/cart')
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <CodeIcon sx={{ mr: 2 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={navLinkStyle}>EZ Shop</Link>
            </Typography>
            <NavLink to="/product" style={navLinkStyle}>
              <Button color="inherit">Products</Button>
            </NavLink>
            <NavLink to="/cart" style={navLinkStyle}>
              <Button color="inherit">Cart</Button>
            </NavLink>
            <NavLink to="/album" style={navLinkStyle}>
              <Button color="inherit">Albums</Button>
            </NavLink>
          
            {!isLoggedIn && (
              <Button color="inherit" onClick={handleClickOpen}>
                Login
              </Button>              
            )}

            <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={handleCartClick}>
              <Badge badgeContent={cartItemsCount} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>

            {isLoggedIn && (
              <IconButton color="inherit" onClick={handleUserClick} >
                <AccountCircle  />
              </IconButton>
            )}

          </Toolbar>
        </AppBar>

        <Menu
          
          keepMounted
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          // transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
          <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
        </Menu>
        
        <Dialog
          open={open}
          onClose={(event, reason) => {
            if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
              handleClose();
            }
          }}
          maxWidth="xs"
          fullWidth
          
        >
          <IconButton sx={{position: 'absolute', top: '8px', right: '8px', color: 'gray', zIndex: 1}} onClick={handleClose}>
            <Close></Close>
          </IconButton>

          <DialogContent>
            {mode === MODE.REGISTER && (
              <>
                <Register closeDialog={handleClose} />
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Button color='primary' onClick={() => setMode(MODE.LOGIN)}>
                    Alrready have an account. Login here
                  </Button>
                </Box>
              </>
            )}

            {mode === MODE.LOGIN && (
              <>
                <Login closeDialog={handleClose} />
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Button color='primary' onClick={() => setMode(MODE.REGISTER)}>
                    Dont have an account. Register here
                  </Button>
                </Box>
              </>
            )}
          </DialogContent>
        </Dialog>
      </Box>

      
    </div>
  );
}

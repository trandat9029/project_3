import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from '@mui/material';
import { NavLink, useLocation} from 'react-router-dom';

ProductMenu.propTypes = {
  
};

function ProductMenu() {

    const linkStyle = {
        px: 2,
        py: 1,
        color: 'text.secondary',
        textDecoration: 'none',
        '&.active': {
          color: 'primary.main',
          fontWeight: 'bold',
          borderBottom: '2px solid',
        },
        '&:hover': {
          textDecoration: 'underline',
          color: 'primary.main',
        },
      };

    const {pathname} = useLocation();
    const url = pathname.split('/').slice(0, 3).join('/')

    return (
        <>
            <Box component='ul' sx={{display: 'flex', flexFlow: 'row nowrap', listStyle: 'none', justifyContent: 'center', alignItems: 'center', p: 0}}>
                <li style={{ padding: '2px 4px' }}>
                    <Link
                        component={NavLink}
                        to={url}
                        end
                        className={({ isActive }) => (isActive && pathname === url ? 'active' : '')}
                        sx={linkStyle}
                    >
                    Description
                    </Link>
                </li>

                <li style={{ padding: '2px 4px' }}>
                    <Link
                        component={NavLink}
                        to={`${url}/additional`}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        sx={linkStyle}
                    >
                    Additional Information
                    </Link>
                </li>

                <li style={{ padding: '2px 4px' }}>
                    <Link
                        component={NavLink}
                        to={`${url}/reviews`}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        sx={linkStyle}
                    >
                    Reviews
                    </Link>
                </li>
            </Box>
        </>
    );
}

export default ProductMenu;
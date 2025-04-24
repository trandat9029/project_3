import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { THUMBNAIL_PLACEHOLDER } from 'constants/index';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({product}) {
    const thumbnailUrl = product.thumbnail 
    ? product.thumbnail 
    : THUMBNAIL_PLACEHOLDER;

  return (
    <>
      <Box padding={1}>
        <Box padding={1} minHeight='215px'>
            <img src={thumbnailUrl} alt={product.title}  width='100%'/>
        </Box>
        <Typography variant='body2'>{product.title}</Typography>
        <Typography variant='body2'>
            <Box component='span' fontSize='16px' fontWeight='bold' marginRight={1}> 
                {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(product.price)}
            </Box>
            {product.discountPercentage > 0 ? ` - ${product.discountPercentage}%` : ''}
        </Typography>

      </Box>
    </>
  );
}

export default Product;
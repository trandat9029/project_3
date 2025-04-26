import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { THUMBNAIL_PLACEHOLDER } from 'constants/index';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from 'utils';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({product}) {

    const navigate = useNavigate();
    const thumbnailUrl = product.thumbnail 
    ? product.thumbnail 
    : THUMBNAIL_PLACEHOLDER;

    const handleClick = ()=>{
      //Navigation to detail page: /products/:productId
      navigate(`/product/${product.id}`);
    }

  return (
    <>
      <Box padding={1} onClick={handleClick}>
        <Box padding={1} minHeight='215px'>
            <img src={thumbnailUrl} alt={product.title}  width='100%'/>
        </Box>
        <Typography variant='body2'>{product.title}</Typography>
        <Typography variant='body2'>
            <Box component='span' fontSize='16px' fontWeight='bold' marginRight={1}> 
                {formatPrice(product.price)}
            </Box>
            {product.discountPercentage > 0 ? ` - ${product.discountPercentage}%` : ''}
        </Typography>

      </Box>
    </>
  );
}

export default Product;
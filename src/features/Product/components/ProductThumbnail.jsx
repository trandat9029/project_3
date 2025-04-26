import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { THUMBNAIL_PLACEHOLDER } from 'constants/common';

ProductThumbnail.propTypes = {
  product: PropTypes.object,

};

function ProductThumbnail({product}) {

    const thumbnailUrl = product.thumbnail ? product.thumbnail : THUMBNAIL_PLACEHOLDER;

    return (
        <>
            <Box>
                <img src={thumbnailUrl} alt={product.title}  width='100%'/>
            </Box>      
        </>
    );
}

export default ProductThumbnail;
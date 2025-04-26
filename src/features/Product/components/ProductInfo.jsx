import React from 'react';
import PropTypes from 'prop-types';
import { Box, Icon, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { formatPrice } from 'utils';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({product = {}}) {

    const {title, description, category, price, tags, discountPercentage, rating} = product;

  return (
    <>
      <Box display='flex' flexDirection='column' gap={2} sx={{paddingBottom : 2, borderBottom: '1px solid #ccc' }}>
            <Typography sx={{fontSize: '20px'}}><span style={{fontWeight: 'bold'}}>Tên sản phẩm: </span>{title}</Typography>
            <Typography> <span style={{fontWeight: 'bold'}} >Danh mục: </span>{category}</Typography>

            <Box display='flex' gap={3} sx={{alignItems: 'center'}}>
                <Box sx={{fontSize: '18px'}} component='span'> <span style={{fontWeight: 'bold'}}>Giá: </span>
                    {formatPrice(price)}
                </Box>
                <Box  sx={{fontWeight: 'bold', color: 'red', fontSize: '14px'}} component='span'>{`-${discountPercentage}%`}</Box>
            </Box>
            <Typography><span style={{fontWeight: 'bold'}}>Hãng: </span>{tags}</Typography>
            <Typography sx={{display:'flex', alignItems: 'center' }}><span style={{fontWeight: 'bold'}}>Đánh giá: </span> {rating}<StarIcon style={{ color: '#fdd835' }}/></Typography>
            <Typography><span style={{fontWeight: 'bold'}}>Mổ tả:</span>{description}</Typography>
      </Box>
    </>
  );
}

export default ProductInfo;
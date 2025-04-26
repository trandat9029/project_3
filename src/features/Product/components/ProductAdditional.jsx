import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@mui/material';

ProductAdditional.propTypes = {
  
};

function ProductAdditional({product = {}}) {
  return (
    <>
      <Paper elevation={0} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
            Thông tin bổ sung
        </Typography>

        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', listStyle: 'none' }} >
            <li> <strong>Trọng lượng:</strong> {product.weight}g</li>
            <li><strong>Kích thước:</strong>  {product.width} x {product.height} x {product.depth} cm</li>
            <li> <strong>Bảo hành: </strong>{product.warrantyInformation}</li>
            <li><strong>Thời gian giao hàng:</strong>  {product.shippingInformation}</li>
        </ul>
        </Paper>
    </>
  );
}

export default ProductAdditional;
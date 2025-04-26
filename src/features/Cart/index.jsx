import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Button, IconButton, Paper, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { cartItemsSelector, cartItemsCountSelector, cartTotalSelector } from './selectors';
import { removeFormCart, setQuantity } from './cartSlice';

CartFeature.propTypes = {};

function CartFeature() {
  const cartItems = useSelector(cartItemsSelector);
  const cartTotal = useSelector(cartTotalSelector);
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFormCart(id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(setQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <Box padding={3}>
      <Typography variant="h6" mb={2}>
         Có {cartItemsCount} sản phẩm trong giỏ hàng – Tổng cộng: {cartTotal.toLocaleString()}$
      </Typography>

      {cartItems.map((item) => {
        const { id, product, quantity } = item;
        const { thumbnail, title, description, price, discountPercentage } = product;
        const originalPrice = Math.round(price / (1 - discountPercentage / 100));

        return (
          <Paper key={id} sx={{ mb: 2, p: 2 }} elevation={1}>
            <Box display="flex" gap={2}>
              <img src={thumbnail} alt={title} width={100} height={100} />

              <Box flex={1}>
                <Typography fontWeight="bold">{title}</Typography>
                <Typography variant="body2" color="text.secondary" >
                  {description}
                </Typography>
                <Typography color="green" fontSize="14px" fontWeight="500">
                  GIAO NHANH 2H
                </Typography>
                <Box display="flex" alignItems="center" mt={1} gap={1}>
                  <Button size="small" color="error" onClick={() => handleRemove(id)}>
                    Xoá
                  </Button>
                  
                </Box>
              </Box>

              <Box textAlign="right" minWidth="150px">
                <Typography fontWeight="bold" fontSize="18px">
                  {price.toLocaleString()}$
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <del>{ originalPrice.toLocaleString()}$</del> | -{Math.round(discountPercentage)}%
                </Typography>

                <Box display="flex" alignItems="center" justifyContent="flex-end" mt={1}>
                  <Button onClick={() => handleQuantityChange(id, quantity - 1)}>-</Button>
                  <Typography mx={1}>{quantity}</Typography>
                  <Button onClick={() => handleQuantityChange(id, quantity + 1)}>+</Button>
                </Box>
              </Box>
            </Box>
          </Paper>
        );
      })}
    </Box>
  );
}

export default CartFeature;

import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Box, Divider } from '@mui/material';

ProductReview.propTypes = {
  product: PropTypes.object,
};

function ProductReview({ product = {} }) {
  const reviews = product.reviews || [
    {
      name: 'Nguyễn Văn A',
      rating: 4,
      comment: 'Sản phẩm tốt, đóng gói cẩn thận.',
      date: '2023-08-01',
    },
    {
      name: 'Trần Thị B',
      rating: 2,
      comment: 'Không giống mô tả lắm!',
      date: '2023-07-20',
    },
  ];

  return (
    <Paper elevation={0} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom paddingBottom={3}> 
        Đánh giá sản phẩm
      </Typography>

      {reviews.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          Chưa có đánh giá nào cho sản phẩm này.
        </Typography>
      ) : (
        reviews.map((review, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="subtitle2" fontSize='18px'>
              {review.reviewerName} – {review.date}
            </Typography>
            <Typography variant="subtitle2">
              {review.reviewerEmail}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {`⭐`.repeat(review.rating)}
              {Array.from({ length: 5 - review.rating }).map((_, i) => '☆')}
            </Typography>
            <Typography variant="body1">{review.comment}</Typography>
            {index < reviews.length - 1 && <Divider sx={{ my: 2 }} />}
          </Box>
        ))
      )}
    </Paper>
  );
}

export default ProductReview;

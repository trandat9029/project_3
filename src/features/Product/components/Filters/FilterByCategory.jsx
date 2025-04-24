import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
// import productApi from 'api/productApi';
import categoryApi from 'api/categoryApi';

FilterByCategory.propTypes = {
  onchange : PropTypes.func,
};

function FilterByCategory({onChange}) {

    const [categoryList, setCategoryList] = useState([])

    useEffect(() =>{
        (async () =>{
            try {
                const list = await categoryApi.getAll();
                const mapped = list.map((x) => ({
                    slug: x.slug,
                    name: x.name,
                }));
                setCategoryList(mapped);
                console.log('Fetched categories:', mapped);
            } catch (error) {
                console.log('Failed to fetch category list', error);
            }
        } )()
    },[])
    
    const handleCategoryClick = (category)=>{
        if(onChange){
            onChange(category.slug);
        }
    }

  return (
    <>
      <Box padding={2}>
        <Typography variant='subtitle2' >DANH MỤC SẢN PHẨM</Typography>
        
        <ul style={{listStyleType: 'none',gap: '1px' ,margin: '0', padding: '0' , display: 'flex', flexDirection: 'column'}}>
            {categoryList.map((category) => (
                <li 
                    key={category.slug} 
                    onClick={() => handleCategoryClick(category)}
                >
                    <Typography variant='body2' 
                        sx={{ transition:'all 0.5s',
                             
                            marginTop: '10px',
                            cursor: 'pointer',
                            '&:hover':{
                                color: 'primary.main',
                                fontWeight: 'bold',
                            } 
                        }}>
                       {category.name}
                    </Typography> 
                </li>
            ))}
        </ul>
      </Box>
    </>
  );
}

export default FilterByCategory;
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, Chip } from '@mui/material';


FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,

};

const FILTER_LIST =[
    {
        id : 1,
        getLabel: () =>'Giao hàng miễn phí',
        isActive : (filters) => filters.isFreeShip,
        isVisible: () => true,
        isRemovable: false ,
        onRemove: () => {},
        onToggle: (filters) => {
            const newFilters = {...filters};
            if(newFilters.isFreeShip){
                delete newFilters.isFreeShip
            }else{
                newFilters.isFreeShip = true;
            }

            return newFilters;
        },
    },
    {
        id : 2,
        getLabel: () =>'Có khuyến mãi',
        isActive : () => true,
        isVisible: (filters) => filters.isPromotion,
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = {...filters};
            delete newFilters.isPromotion;
            return newFilters;
        },
        onToggle: null,
    },
    {
        id : 3,
        getLabel: (filters) =>`Từ ${filters.price_gte} đến ${filters.price_lte}`,
        isActive : () => true,
        isVisible: (filters) => Object.keys(filters).includes('price_gte') && Object.keys(filters).includes('price_lte'),
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = {...filters};
            delete newFilters.price_gte;
            delete newFilters.price_lte;
            return newFilters;
        },
        onToggle: null,
    },
    {
        id : 4,
        getLabel: (filters) => ` ${filters.categorySlug}`,
        isActive : () => true,
        isVisible: (filters) => filters.categorySlug,
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = {...filters};
            delete newFilters.categorySlug;
            return newFilters;
        },
        onToggle: null,
    },
];

function FilterViewer({filters = {}, onChange = null}) {

    const visibleFilters = useMemo(()=>{
        return FILTER_LIST.filter(x => x.isVisible(filters));
    }, [filters])

    return (
        <>
            <Box component='ul' sx={{display: 'flex', flexFlow: 'row wrap', alignItems: 'center', margin: '20px 0', listStyle: 'none'}}>
                {visibleFilters.map(x =>(
                    <li key={x.id}>
                        <Chip 
                            label={x.getLabel(filters)} 
                            color={x.isActive(filters) ? 'primary' : 'default'}
                            clickable={!x.isRemovable}
                            onClick={x.isRemovable ? null : () =>{
                                if(!onChange) return;
                                const newFilters = x.onToggle(filters)
                                onChange(newFilters);
                            }}
                            onDelete={x.isRemovable ? ()=>{
                                if(!onChange) return;
                                const newFilters = x.onRemove(filters)
                                onChange(newFilters);
                            } : null}
                        />
                    </li>
                ))}
            </Box>
        </>
    );
}

export default FilterViewer;
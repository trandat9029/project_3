import PropTypes from 'prop-types';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';

FilterByService.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

function FilterByService({filters ={}, onChange}) {

    const handleChange =(e)=>{
        if(!onChange) return;
        const {name, checked} = e.target;

        onChange({[name] : checked})
    };

    return (
        <>
        <Box padding={2} sx={{ borderTop: '1px solid #ccc' }}>
            <Typography variant='subtitle2'>Dịch vụ</Typography>
            <ul style={{padding: '0', margin: 0, listStyle: 'none', display:'flex', flexDirection: 'column', gap: '0' }}>
                {[{value: 'isPromotion', label: 'Khuyến mại'},
                    { value:'isFreeShip', label:'Miễn phí vận chuyển'}
                ].map(service =>(
                    <li style={{margin: '0'}} key={service.value}>
                        <FormControlLabel control={
                            <Checkbox 
                                checked={Boolean(filters[service.value])}
                                onChange={handleChange}
                                name={service.value}
                                color='primary'
                            />
                        } 
                        label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
        </>
    );
}

export default FilterByService;
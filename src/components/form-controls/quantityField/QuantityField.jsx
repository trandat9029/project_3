import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { FormControl, InputLabel, OutlinedInput, FormHelperText, IconButton, Box, Typography} from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';


QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function QuantityField({ form, name, label, disabled }) {
    const {
        control,
        formState: { errors },
        setValue,
    } = form;

    const hasError = !!errors[name];

    return (
        <FormControl fullWidth margin="normal" variant="outlined" size='small' error={hasError}>
        <Typography>{label}</Typography>
        <Controller
            name={name}
            control={control}
            render={({field}) => {
                const { onChange, onBlur, value } = field;
                const currentValue = Number(value || 1);
                return (
                    <Box sx={{maxWidth: '200px'}} display="flex" alignItems="center" gap={1}>
                      <IconButton onClick={() => setValue(name, Math.max(currentValue - 1, 1))}>
                        <RemoveCircleOutline />
                      </IconButton>
              
                      <OutlinedInput
                        id={name}
                        type="number"
                        disabled={disabled}
                        value={value} 
                        onChange={onChange}
                        onBlur={onBlur}
                      />
              
                      <IconButton onClick={() => setValue(name, currentValue + 1)}>
                        <AddCircleOutline />
                      </IconButton>
                    </Box>
                  );
            }}
        />
        <FormHelperText>{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
    }

export default QuantityField;

import React from 'react';
import TextField from '@mui/material/TextField';

const InputField = ({ label, value, onChange}) => {
  return <TextField value={value} onChange={onChange} id="outlined-basic" label={label} variant="outlined" />;
};

export default InputField;

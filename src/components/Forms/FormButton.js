import React from 'react';
import Button from '@mui/material/Button';

const FormButton = ({ label, onClick }) => {
  return <Button onClick={onClick} className="pd" variant="contained">{label}</Button>;
};

export default FormButton;

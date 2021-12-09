import React from 'react';
import Button from '@mui/material/Button';

const Buttons = ({ onClick, label }) => {
  return (
    <Button onClick={onClick} variant="contained">
      {label}
    </Button>
  );
};

export default Buttons;

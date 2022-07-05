import { TextField, Typography } from '@mui/material';
import React from 'react';

export const CustomTextField = ({ label, value, onChange, name, error, type, errorMessage, touched }) => {
  return (
    <>
      <TextField
        fullWidth
        label={label}
        value={value}
        name={name}
        onChange={onChange}
        error={error}
        type={type}
      />
      {errorMessage && touched ? (
        <Typography variant="caption" sx={{
          display: 'block',
          fontSize:'11px',
          textAlign: 'start',
          color: '#D24242',
        }}>{errorMessage}</Typography>
      ) : null}
    </>
  )
}
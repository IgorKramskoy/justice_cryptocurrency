import { CustomButton } from './Common/CustomButton';
import { CustomChip } from './Common/CustomChip';
import { CustomTextField } from './Common/CustomTextField';
import React from 'react';
import { CustomAlert } from './Common/CustomAlert';
import { Box } from '@mui/material';

export const Test = () => {
  return (
    <Box sx={
      { background:'#111823'}
    }>
      <div>
        <CustomButton size="large" variant="contained" text="Button" disabled={false} color="primary"/>
        <CustomButton size="medium" variant="contained" text="Button" disabled={false} color="success"/>
        <CustomButton size="small" variant="contained" text="Button" disabled={false} color="error"/>
        <CustomButton size="small" variant="contained" text="Button" disabled={false} color="info"/>
      </div>
      <div>
        <CustomChip label="Успешно" color="error"/>
        <CustomChip label="В обработке" color="warning"/>
        <CustomChip label="Отклонено" color="success"/>
      </div>

      <CustomTextField id="outlined-basic" label="Имя" variant="outlined" />
      <CustomAlert text="text" color="success"/>
      <CustomAlert text="text" color="error"/>
      <CustomAlert isSmall text="text" color="success"/>
      <CustomAlert isSmall text="text" color="error"/>
    </Box>
  )
}
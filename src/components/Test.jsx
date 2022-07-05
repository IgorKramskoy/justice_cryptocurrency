import { CustomTextField } from './Common/CustomTextField';
import React from 'react';
import { Alert, Box, Button, Chip } from '@mui/material';
import { AutocompleteCurrencyInfo } from './Common/AutocompleteCurrencyInfo/AutocompleteCurrencyInfo';

export const Test = () => {
  return (
    <Box sx={
      { background:'#111823'}
    }>
      <div>
        <Button size="large" variant="contained" disabled={false} color="primary">Text</Button>
        <Button size="large" variant="contained" disabled={true} color="primary">Text</Button>
        <Button size="medium" variant="contained" disabled={false} color="success">Text</Button>
        <Button size="small" variant="contained" disabled={false} color="error">Text</Button>
        <Button size="small" variant="contained" disabled={false} color="info">Text</Button>
      </div>
      <div>

        <Chip label="Успешно" color="error"/>
        <Chip label="В обработке" color="warning"/>
        <Chip label="Отклонено" color="success"/>
      </div>

      <CustomTextField id="outlined-basic" label="Имя" variant="outlined" />
      <CustomTextField id="outlined-basic" label="Имя" variant="outlined" />
      <Alert color='success' variant='filledMedium' icon={false}>text</Alert>
      <Alert color='success' variant='filledLarge' icon={false}>text</Alert>
      <Alert color='error' variant='filledMedium' icon={false}>text</Alert>
      <Alert color='error' variant='filledLarge' icon={false}>text</Alert>
      <AutocompleteCurrencyInfo/>
    </Box>
  )
}
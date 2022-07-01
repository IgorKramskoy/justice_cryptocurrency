import React from 'react';

import { RegisterFormContainer } from './RegisterFormContainer';
import { Box, Typography } from '@mui/material';

import register from '../../../assets/images/register.png'
import { BoxReg } from './BoxReg.styled';

export const Register = () => {
  return (
    <BoxReg>
      <BoxReg mode='left'>
        <Box sx={{ width: '420px' }}>
          <Typography variant="h4" sx={{
            color: 'white',
          }}>
            Зарегистрироваться
          </Typography>
          <RegisterFormContainer/>
          <BoxReg mode='footer'>
            <Typography variant="caption" sx={{ color: 'white' }}>
              Уже есть учетная запись?
            </Typography>
            <Typography variant="caption" sx={{
              color: 'white',
            }}>
              Авторизоваться
            </Typography>
         </BoxReg>
        </Box>
      </BoxReg>
      <BoxReg mode='right'>
        <img src={register} alt='login'/>
      </BoxReg>
    </BoxReg>
  );
}
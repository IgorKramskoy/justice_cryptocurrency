import React from 'react';

import { RegisterFormContainer } from './RegisterFormContainer';
import { Box, Typography } from '@mui/material';

import register from '../../../assets/images/register.png'
import { BoxReg } from './BoxReg.styled';
import * as Navigate from '../../../routesNavigate';
import { LinkStyled } from './Link.styled';

export const Register = () => {
  return (
    <BoxReg>
      <BoxReg mode='left'>
        <Box sx={{ width: '420px' }}>
          <Typography variant="h4" sx={{color: 'white'}}>
            Зарегистрироваться
          </Typography>
          <RegisterFormContainer/>
          <BoxReg mode='footer'>
            <Typography variant="caption" sx={{ color: 'white' }}>
              Уже есть учетная запись?
            </Typography>
            <LinkStyled to={Navigate.LOGIN}>
              Авторизоваться
            </LinkStyled>
         </BoxReg>
        </Box>
      </BoxReg>
      <BoxReg mode='right'>
        <img src={register} alt='login'/>
      </BoxReg>
    </BoxReg>
  );
}
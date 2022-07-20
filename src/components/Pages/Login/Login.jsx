import React from 'react';


import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography
} from '@mui/material';
import { LoginFormContainer } from './LoginFormContainer';
import { BoxLog } from './BoxLog.styled';
import { LinkStyled } from './Link.styled';

import * as Navigate from '../../../routesNavigate';
import login from '../../../assets/images/login.png';

export const Login = () => {
  return (
    <BoxLog>
      <BoxLog mode='left'>
        <Box sx={{ width: '420px' }}>
          <Typography variant="h4" sx={{ color: 'white' }}>
            Вход
          </Typography>
          <LoginFormContainer/>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <BoxLog mode='footer'>
            <Typography variant="caption" sx={{ color: 'white' }}>
              Нет аккаунта?
            </Typography>
            <LinkStyled to={Navigate.REGISTER}>
              Создать аккаунт
            </LinkStyled>
         </BoxLog>
        </Box>
      </BoxLog>
      <BoxLog mode='right'>
        <img src={login} alt='login'/>
      </BoxLog>
    </BoxLog>
  );
}
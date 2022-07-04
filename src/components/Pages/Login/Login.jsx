import React from 'react';

import { LoginFormContainer } from './LoginFormContainer';
import {
  Box, Checkbox,
  FormControlLabel,
  Typography
} from '@mui/material';

import login from '../../../assets/images/login.png'
import { BoxLog } from './BoxLog.styled';
import { CustomCheckbox } from '../../Common/CustomCheckbox';

export const Login = () => {
  return (
    <BoxLog>
      <BoxLog mode='left'>
        <Box sx={{ width: '420px' }}>
          <Typography variant="h4" sx={{
            color: 'white',
          }}>
            Вход
          </Typography>
          <LoginFormContainer/>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <BoxLog mode='footer'>
            <Typography variant="caption" sx={{ color: 'white' }}>
              Нет аккаунта?
            </Typography>
            <Typography variant="caption" sx={{
              color: 'white',
            }}>
              Создать аккаунт
            </Typography>
         </BoxLog>
        </Box>
      </BoxLog>
      <BoxLog mode='right'>
        <img src={login} alt='login'/>
      </BoxLog>
    </BoxLog>
  );
}
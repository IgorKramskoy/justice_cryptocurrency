import React from 'react';

import { CustomTextField } from '../../../Common/CustomTextField';
import { CustomButton } from '../../../Common/CustomButton';

import { StylesBoxReg } from './LoginFormContainer.styled';

export const LoginFormContainer = () => {
  return (
    <StylesBoxReg>
      <CustomTextField label='Email'/>
      <CustomTextField label='Пароль' />
      <CustomButton size="large" variant="contained" text="Зарегестрироваться" disabled={true} color="info"/>
    </StylesBoxReg>
  );
}
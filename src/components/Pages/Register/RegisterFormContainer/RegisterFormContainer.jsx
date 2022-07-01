import React from 'react';

import { CustomTextField } from '../../../Common/CustomTextField';
import { StylesBoxReg } from './RefisterFormContainer.styled';
import { CustomButton } from '../../../Common/CustomButton';

export const RegisterFormContainer = () => {
  return (
    <StylesBoxReg>
      <CustomTextField label='Email'/>
      <CustomTextField label='Имя' />
      <StylesBoxReg mode='item'>
        <CustomTextField label='Пароль'/>
        <CustomTextField label='Подтвердите пароль'/>
      </StylesBoxReg>
      <CustomButton size="large" variant="contained" text="Зарегестрироваться" disabled={true} color="info"/>
    </StylesBoxReg>
  );
}
import React, { useState } from 'react';
import { useFormik } from 'formik';

import { CustomTextField } from '../../../Common/CustomTextField';
import { CustomButton } from '../../../Common/CustomButton';
import { Box, Typography } from '@mui/material';

import { StylesBoxReg } from './LoginFormContainer.styled';
import { LoginFormValidation } from './LoginFormValidation';

export const LoginFormContainer = () => {
  const [error, setError] = useState('');
  const users = JSON.parse(localStorage.getItem('users'));
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginFormValidation,
    onSubmit: ({email, password }) => {
      const isUserAuth = users.find((user) => user.email === email)
      if(!isUserAuth) {
        setError('Пользователь с таким email не существует или неправильный email!')
      } else if (isUserAuth.password !== password) {
        setError('Неверный пароль!')
      } else {
        localStorage.setItem('userAuth', JSON.stringify(isUserAuth))
        setError('')
      }
    },
  });

  return (
    <StylesBoxReg onSubmit={formik.handleSubmit}>
      <Box sx={{ width: '100%' }}>
        <CustomTextField
          label='Email'
          value={formik.values.email}
          name="email"
          error={formik.errors.email && formik.touched.email}
          onChange={formik.handleChange}
          type="text"
          errorMessage={formik.errors.email}
          touched={formik.touched.email}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <CustomTextField
          label='Пароль'
          value={formik.values.password}
          name="password"
          error={formik.errors.password && formik.touched.password}
          onChange={formik.handleChange}
          type="password"
          errorMessage={formik.errors.password}
          touched={formik.touched.password}
        />
      </Box>
      {error ? <Typography variant="caption" sx={{
        color: '#D24242',
      }}>{error}</Typography> : null}
      <CustomButton
        type="submit"
        size="large"
        variant="contained"
        text="Войти"
        color="info"
      />
    </StylesBoxReg>
  );
}
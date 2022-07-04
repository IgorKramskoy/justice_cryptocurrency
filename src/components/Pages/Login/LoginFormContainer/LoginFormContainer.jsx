import React, { useState, useContext, useEffect } from 'react';
import { useFormik } from 'formik';

import { CustomTextField } from '../../../Common/CustomTextField';
import { CustomButton } from '../../../Common/CustomButton';
import { Box, Typography } from '@mui/material';

import { StylesBoxReg } from './LoginFormContainer.styled';
import { LoginFormValidation } from './LoginFormValidation';
import { Context } from '../../../../App';
import { useNavigate } from 'react-router-dom';
import * as Navigate from '../../../../routesNavigate';

export const LoginFormContainer = () => {
  const [error, setError] = useState('');
  const { currentUser, setCurrentUser } = useContext(Context);
  const navigate = useNavigate();

  const users = JSON.parse(localStorage.getItem('users'));
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginFormValidation,
    onSubmit: ({email, password }) => {
      const userAuth = users.find((user) => user.email === email)
      if(!userAuth) {
        setError('Пользователь с таким email не существует или неправильный email!')
      } else if (userAuth.password !== password) {
        setError('Неверный пароль!')
      } else {
        localStorage.setItem('userAuth', JSON.stringify(userAuth))
        setCurrentUser(userAuth);
        setError('')
        navigate(Navigate.MARKET)
      }
    },
  });

  useEffect(() => {
    if(currentUser) {
      navigate(Navigate.MARKET)
    }
  }, [])

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
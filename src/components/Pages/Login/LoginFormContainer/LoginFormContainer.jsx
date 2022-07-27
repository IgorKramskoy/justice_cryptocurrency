import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { CustomTextField } from '../../../Common/CustomTextField';
import {
  Box,
  Button,
  Typography
} from '@mui/material';
import { StylesBoxReg } from './LoginFormContainer.styled';

import { LoginFormValidation } from './LoginFormValidation';
import { createUserAuth } from '../../../../redux/action';
import * as Navigate from '../../../../routesNavigate';
import axios from 'axios';

export const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const currentUser = useSelector((state) => state.users.currentUser)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginFormValidation,
    onSubmit: ({email, password}) => {
      const data = {
        email,
        password,
      }
      axios.post('http://localhost:4200/auth/login', data)
        .then(function (response) {
          setError('')
          localStorage.setItem('userAuth', JSON.stringify(response.data))
          dispatch(createUserAuth(response.data))
          navigate(Navigate.MARKET)
        })
        .catch(function () {
          setError('Неправильный email или пароль!')
        });
    },
  });

  useEffect(() => {
    if (currentUser) {
      navigate(Navigate.MARKET)
    }
  },[])

  return (
    <StylesBoxReg onSubmit={formik.handleSubmit}>
      <Box sx={{width: '100%'}}>
        <CustomTextField
          label="Email"
          value={formik.values.email}
          name="email"
          error={formik.errors.email && formik.touched.email}
          onChange={formik.handleChange}
          type="text"
          errorMessage={formik.errors.email}
          touched={formik.touched.email}
        />
      </Box>
      <Box sx={{width: '100%'}}>
        <CustomTextField
          label="Пароль"
          value={formik.values.password}
          name="password"
          error={formik.errors.password && formik.touched.password}
          onChange={formik.handleChange}
          type="password"
          errorMessage={formik.errors.password}
          touched={formik.touched.password}
        />
      </Box>
      {error ? <Typography variant="caption" sx={{color: '#D24242'}}>{error}</Typography> : null}
      <Button
        type="submit"
        size="large"
        variant="contained"
        color="info"
      >
        Войти
      </Button>
    </StylesBoxReg>
  );
}
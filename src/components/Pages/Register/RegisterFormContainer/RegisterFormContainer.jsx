import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  Box,
  Button,
  Typography
} from '@mui/material';
import { CustomTextField } from '../../../Common/CustomTextField';
import { StylesBoxReg } from './RefisterFormContainer.styled';

import { RegisterFormValidation } from './RegisterFormValidation';
import * as Navigate from '../../../../routesNavigate';
import axios from 'axios';


export const RegisterFormContainer = () => {
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const currentUser = useSelector((state) => state.users.currentUser);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: RegisterFormValidation,
    onSubmit: ({name, email, password}) => {
      const data = {
        name,
        email,
        password,
        birthday: '',
        city: '',
        phone: '',
        avatar: '',
      }
      axios.post('http://localhost:4200/auth/register', data)
        .then(function () {
          setError('')
          navigate(Navigate.LOGIN)
        })
        .catch(function () {
          setError('Пользователь с таким email существует')
        });
    },
  });

  useEffect(() => {
    if (currentUser) {
      navigate(Navigate.MARKET)
    }
  }, [])

  return (
    <StylesBoxReg onSubmit={formik.handleSubmit}>
      <Box sx={{width: '100%'}}>
        <CustomTextField
          label="Имя"
          value={formik.values.name}
          name="name"
          error={formik.errors.name && formik.touched.name}
          onChange={formik.handleChange}
          type="text"
          errorMessage={formik.errors.name}
          touched={formik.touched.name}
        />
      </Box>
      <Box sx={{width: '100%'}}>
        <CustomTextField
          label="Email"
          value={formik.values.email}
          name="email"
          error={formik.errors.email && formik.touched.email}
          onChange={formik.handleChange}
          type="email"
          errorMessage={formik.errors.email}
          touched={formik.touched.email}
        />
      </Box>
      <StylesBoxReg mode="item">
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
        <Box sx={{width: '100%'}}>
          <CustomTextField
            label="Подтвердите пароль"
            value={formik.values.repeatPassword}
            name="repeatPassword"
            error={formik.errors.repeatPassword && formik.touched.repeatPassword}
            onChange={formik.handleChange}
            type="password"
            errorMessage={formik.errors.repeatPassword}
            touched={formik.touched.repeatPassword}
          />
        </Box>
      </StylesBoxReg>
      {error ? <Typography variant="caption" sx={{color: '#D24242'}}>{error}</Typography> : null}
      <Button
        type="submit"
        size="large"
        variant="contained"
        color="info"
      >Зарегистрироваться</Button>
    </StylesBoxReg>
  );
}
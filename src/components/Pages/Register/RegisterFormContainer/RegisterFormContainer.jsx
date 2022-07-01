import React, { useState } from 'react';

import { CustomTextField } from '../../../Common/CustomTextField';
import { StylesBoxReg } from './RefisterFormContainer.styled';
import { CustomButton } from '../../../Common/CustomButton';
import { useFormik } from 'formik';
import { Box, Typography } from '@mui/material';
import { RegisterFormValidation } from './RegisterFormValidation';

export const RegisterFormContainer = () => {
  const [error, setError] = useState('');
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) ?? []);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: RegisterFormValidation,
    onSubmit: ({ name, email, password }) => {
      const data = {
        name,
        email,
        password,
        id: Date.now(),
        birthday: '',
        city: '',
        phone: '',
        avatar: '',
      }
      const isUserExist = users.some((user) => user.email === email)
      if(isUserExist) {
        setError('Пользователь с таким email существует')
      } else {
        setUsers([...users, data])
        localStorage.setItem('users', JSON.stringify([...users, data]))
        setError('')
      }
    },
  });

  return (
    <StylesBoxReg onSubmit={formik.handleSubmit}>
      <Box sx={{ width: '100%' }}>
        <CustomTextField
          label='Имя'
          value={formik.values.name}
          name="name"
          error={formik.errors.name && formik.touched.name}
          onChange={formik.handleChange}
          type="text"
        />
        {formik.errors.name && formik.touched.name ? (
          <Typography variant="caption" sx={{
            color: 'red',
          }}>{formik.errors.name}</Typography>
        ) : null}
      </Box>
      <Box sx={{ width: '100%' }}>
        <CustomTextField
          label='Email'
          value={formik.values.email}
          name="email"
          error={formik.errors.email && formik.touched.email}
          onChange={formik.handleChange}
          type="email"
        />
        {formik.errors.name && formik.touched.name ? (
          <Typography variant="caption" sx={{
            color: 'red',
          }}>{formik.errors.name}</Typography>
        ) : null}
      </Box>
      <StylesBoxReg mode='item'>
        <Box sx={{ width: '100%' }}>
          <CustomTextField
            label='Пароль'
            value={formik.values.password}
            name="password"
            error={formik.errors.password && formik.touched.password}
            onChange={formik.handleChange}
            type="password"
          />
          {formik.errors.password && formik.touched.password ? (
            <Typography variant="caption" sx={{
              color: 'red',
            }}>{formik.errors.password}</Typography>
          ) : null}
        </Box>
        <Box sx={{ width: '100%' }}>
          <CustomTextField
            label='Подтвердите пароль'
            value={formik.values.repeatPassword}
            name="repeatPassword"
            error={formik.errors.repeatPassword && formik.touched.repeatPassword}
            onChange={formik.handleChange}
            type="password"
          />
          {formik.errors.repeatPassword && formik.touched.repeatPassword ? (
            <Typography variant="caption" sx={{
              color: 'red',
            }}>{formik.errors.password}</Typography>
          ) : null}
        </Box>
      </StylesBoxReg>
      {error ? <Typography variant="caption" sx={{
        color: 'red',
      }}>{error}</Typography> : null}
      <CustomButton
        type="submit"
        size="large"
        variant="contained"
        text="Зарегистрироваться"
        color="info"
      />
    </StylesBoxReg>
  );
}
import React from 'react';

import {  Container } from './ProfilePasswordFormContainer.styled';
import { CustomTextField } from '../../../Common/CustomTextField';
import { useFormik } from 'formik';
import { ProfilePasswordFormValidation } from './ProfilePasswordFormValidation';
import { Box, Button, Typography } from '@mui/material';

export const ProfilePasswordForm = () => {
  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      repeatNewPassword: '',
    },
    validationSchema: ProfilePasswordFormValidation,
    onSubmit: ({ repeatNewPassword, newPassword, oldPassword, }) => {
      const data = {
        repeatNewPassword,
        newPassword,
        oldPassword,
      }
      console.log(data)
    },
  });

  const inputs = [
    {
      label: 'Введите старый пароль',
      name: 'oldPassword',
      type: 'password',
    },
    {
      label: 'Повторите новый пароль',
      name: 'repeatNewPassword',
      type: 'password',
    },
    {
      label: 'Введите новый пароль',
      name: 'newPassword',
      type: 'password',
    },
  ]

  return (
    <>
      <Typography variant="caption" sx={{color: 'white',alignSelf: 'start', padding: '0px 10px',}}>
         Пароль
      </Typography>
      <Container onSubmit={formik.handleSubmit}>
        {inputs.map(({ label, name, type }) => (
          <CustomTextField
            key={name}
            label={label}
            value={formik.values[name]}
            name={name}
            error={formik.errors[name] && formik.touched[name]}
            onChange={formik.handleChange}
            type={type}
            errorMessage={formik.errors[name]}
            touched={formik.touched[name]}
            sx={{
              display:'flex',
              flexDirection:'column',
            }}
          />
        ))}
        <Box sx={{
          width: '50%',
          display: 'flex',
          justifyContent: 'start',
          maxHeight: '56px',
        }}>
          <Button
            type="submit"
            size="large"
            variant="contained"
            color="primary"
          >
            Изменить пароль
          </Button>
        </Box>
      </Container>
    </>
  );
}
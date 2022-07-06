import React from 'react';

import {  Container } from './ProfileDataFormContainer.styled';
import { CustomTextField } from '../../../Common/CustomTextField';
import { useFormik } from 'formik';
import { ProfileDataFormValidation } from './ProfileDataFormValidation';
import { Box, Button, Typography } from '@mui/material';

export const ProfileDataForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      city: '',
      birthday: '',
      phone: '',
    },
    validationSchema: ProfileDataFormValidation,
    onSubmit: ({ name, email, city, birthday, phone }) => {
      const data = {
        name,
        email,
        birthday,
        city,
        phone,
      }
      console.log(data)
    },
  });

  const inputs = [
    {
      label: 'Имя',
      name: 'name',
      type: 'text',
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
    },
    {
      label: 'Город',
      name: 'city',
      type: 'text',
    },
    {
      label: 'Дата рождения',
      name: 'birthday',
      type: 'text',
    },
    {
      label: 'Номер телефона',
      name: 'phone',
      type: 'text',
    },
  ]

  return (
    <>
      <Typography variant="h4" sx={{color: 'white',alignSelf: 'start', padding: '0px 10px',}}>
         Мой профиль
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
              color="info"
            >
              Сохранить изменения
            </Button>
          </Box>
      </Container>
    </>
  );
}
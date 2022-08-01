import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import {
  BoxStyled,
  Container,
  TitleStyled
} from './ProfilePasswordFormContainer.styled';
import { CustomTextField } from '../../../Common/CustomTextField';
import { Button, Typography } from '@mui/material';

import { ProfilePasswordFormValidation } from './ProfilePasswordFormValidation';
import { updateUser } from '../../../../redux/action';
import axios from 'axios';


export const ProfilePasswordForm = () => {
  const dispatch = useDispatch()

  const [error, setError] = useState('');

  const currentUser = useSelector((state) => state.users.currentUser)

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      repeatNewPassword: '',
    },
    validationSchema: ProfilePasswordFormValidation,
    onSubmit: ({repeatNewPassword, newPassword, oldPassword,}) => {
      if(repeatNewPassword === newPassword) {
        setError('')
        const userFind = currentUser
        userFind.password = oldPassword
        userFind.passwordNew = newPassword
        axios.put('http://localhost:4200/auth/password', userFind)
          .then(function (response) {
            dispatch(updateUser(response.data));
            localStorage.setItem('userAuth', JSON.stringify(response.data));
            setError('')
          })
          .catch(function () {
            setError('Не совпадает с текущим паролем!')
          });
      } else {
        setError('Новые пароли не совпадают!')
      }


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
      <TitleStyled variant="h5">
        Пароль
      </TitleStyled>
      <Container onSubmit={formik.handleSubmit}>
        {inputs.map(({label, name, type}) => (
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
            sx={{display: 'flex', flexDirection: 'column',}}
          />
        ))}
        <BoxStyled>
          <Button
            type="submit"
            size="large"
            variant="contained"
            color="primary"
          >
            Изменить пароль
          </Button>
          {error ? <Typography variant="caption" sx={{color: '#D24242', margin: '10px',}}>{error}</Typography> : null}
        </BoxStyled>
      </Container>
    </>
  );
}
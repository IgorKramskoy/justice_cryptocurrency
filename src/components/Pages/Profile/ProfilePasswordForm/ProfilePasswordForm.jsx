import React, { useState} from 'react';
import { useFormik } from 'formik';

import { Container } from './ProfilePasswordFormContainer.styled';
import { CustomTextField } from '../../../Common/CustomTextField';
import { Box, Button, Typography } from '@mui/material';

import { ProfilePasswordFormValidation } from './ProfilePasswordFormValidation';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, updateUsers } from '../../../../redux/action';

export const ProfilePasswordForm = () => {
  const dispatch = useDispatch()
  const usersRedux = useSelector((state) => state.users.allUsers)
  const currentUser = useSelector((state) => state.users.currentUser)
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      repeatNewPassword: '',
    },
    validationSchema: ProfilePasswordFormValidation,
    onSubmit: ({ repeatNewPassword, newPassword, oldPassword, }) => {
      if(currentUser.password === oldPassword && newPassword === repeatNewPassword) {
        const userFind = usersRedux.find((user) => user.password === oldPassword)
        userFind.password = newPassword
        localStorage.setItem('userAuth', JSON.stringify(userFind))
        localStorage.setItem('users', JSON.stringify(usersRedux))
        dispatch(updateUser(userFind))
        dispatch(updateUsers(usersRedux))
        setError('')
      } else { setError('Пароли не совпадают!')}
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
          {error ? <Typography variant="caption" sx={{
            color: '#D24242',
            margin: '10px',
          }}>{error}</Typography> : null}
        </Box>
      </Container>
    </>
  );
}
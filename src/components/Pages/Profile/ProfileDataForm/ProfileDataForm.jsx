import React from 'react';
import { useFormik } from 'formik';

import { Container } from './ProfileDataFormContainer.styled';
import { CustomTextField } from '../../../Common/CustomTextField';
import { Box, Button, Typography } from '@mui/material';

import { ProfileDataFormValidation } from './ProfileDataFormValidation';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, updateUsers } from '../../../../redux/action';

export const ProfileDataForm = () => {
  const dispatch = useDispatch()
  const usersRedux = useSelector((state) => state.users.allUsers)
  const currentUser = useSelector((state) => state.users.currentUser)
  const formik = useFormik({
    initialValues: {
      name: currentUser?.name ?? '',
      email: currentUser?.email ?? '',
      city: currentUser?.city ?? '',
      birthday: currentUser?.birthday ?? '',
      phone: currentUser?.phone ?? '',
    },
    validationSchema: ProfileDataFormValidation,
    onSubmit: ({ name, email, city, birthday, phone}) => {
      const userFind = usersRedux.find( (user) => user.email === email)
      userFind.name = name
      userFind.email = email
      userFind.birthday = birthday
      userFind.city = city
      userFind.phone = phone
      userFind.avatar = userFind.avatar
      localStorage.setItem('userAuth', JSON.stringify(userFind))
      localStorage.setItem('users', JSON.stringify(usersRedux))
      dispatch(updateUser(userFind))
      dispatch(updateUsers(usersRedux))
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
              color="primary"
            >
              Сохранить изменения
            </Button>
          </Box>
      </Container>
    </>
  );
}
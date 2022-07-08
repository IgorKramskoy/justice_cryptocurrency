import React, { useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import { AvatarStyled } from './Avatar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, updateUsers } from '../../../../redux/action';

export const AvatarUser = () => {
  const dispatch = useDispatch()
  const usersRedux = useSelector((state) => state.users.allUsers)
  const currentUser = useSelector((state) => state.users.currentUser)
  const [photo, setPhoto] = useState(currentUser.avatar);
  const convertBase64 = (file) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  async function handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setPhoto(reader.result)
    }
    reader.readAsDataURL(file)
    const base64 = await convertBase64(file);
    const userFind = usersRedux.find((user) => user.email === currentUser.email)
    userFind.avatar = base64
    localStorage.setItem('userAuth', JSON.stringify(userFind))
    localStorage.setItem('users', JSON.stringify(usersRedux))
    dispatch(updateUser(userFind))
    dispatch(updateUsers(usersRedux))
  }
  return (
    <Box sx={{
      background: '#191F29',
      width: '100%',
      height: '208px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
    }}>
      <Box sx={{
        position: 'relative',
        display: 'flex',
        gap: '20px',
      }}>
        <Box sx={{
          width: '84px',
          height: '84px',
          borderLeft: '2px solid #7164FF',
          borderRight: '2px solid #7164FF',
          borderBottom: '2px solid #7164FF',
          borderTop: '2px solid #191F29',
          transform:' rotate(45deg)',
          padding: '20px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <AvatarStyled src={photo}/>
        </Box>
        <Button
          variant="contained"
          component="label"
          sx={{
            borderRadius: '50px',
            padding: '0px',
            minWidth: '15px',
            position: 'absolute',
            top: '5px',
            left: '60px',
            zIndex: '100'
          }}
        >
          <AddIcon/>
          <input
            type="file"
            onChange={handleImageChange}
            hidden
          />
        </Button>
      </Box>
      <Typography variant="caption" sx={{ color: 'white' }}>
       Name User
      </Typography>
    </Box>
  );
}
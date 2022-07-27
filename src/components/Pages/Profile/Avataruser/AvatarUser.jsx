import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
  AvatarStyled,
  BoxConteinerStyled,
  BoxStyled,
  ButtonStyled,
  ConteinerStyled
} from './Avatar.styled';

import { updateUser, updateUsers } from '../../../../redux/action';

export const AvatarUser = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.users.currentUser);

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
    const userFind = currentUser
    userFind.avatar = base64
    localStorage.setItem('userAuth', JSON.stringify(userFind))
    dispatch(updateUser(userFind))
  }

  return (
    <BoxConteinerStyled>
      <BoxStyled>
        <ConteinerStyled>
          <AvatarStyled src={photo}/>
        </ConteinerStyled>
        <ButtonStyled
          variant="contained"
          component="label"
        >
          <AddIcon/>
          <input
            type="file"
            onChange={handleImageChange}
            hidden
          />
        </ButtonStyled>
      </BoxStyled>
      <Typography variant="caption" sx={{color: 'white'}}>
        Name User
      </Typography>
    </BoxConteinerStyled>
  );
}
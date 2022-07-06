import React from 'react';

import { BoxBlock, BoxLeft, BoxRight } from './Box.styled';
import { ProfileDataForm } from './ProfileDataForm';
import { Divider } from '@mui/material';
import { ProfilePasswordForm } from './ProfilePasswordForm';

export const Profile = () => {
  return (
    <BoxBlock>
      <BoxLeft>
        <ProfileDataForm/>
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', minWidth: '95%', margin: '40px 10px', }}
        />
        <ProfilePasswordForm/>
      </BoxLeft>
      <BoxRight></BoxRight>
    </BoxBlock>
  );
}

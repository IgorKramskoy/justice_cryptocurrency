import React from 'react';

import {
  BoxBlock,
  BoxLeft,
  BoxRight,
  DividerStyles
} from './Box.styled';
import { ProfileDataForm } from './ProfileDataForm';
import { ProfilePasswordForm } from './ProfilePasswordForm';
import { AvatarUser } from './Avataruser';

export const Profile = () => {
  return (
    <BoxBlock>
      <BoxLeft>
        <ProfileDataForm/>
        <DividerStyles/>
        <ProfilePasswordForm/>
      </BoxLeft>
      <BoxRight>
        <AvatarUser/>
      </BoxRight>
    </BoxBlock>
  );
}

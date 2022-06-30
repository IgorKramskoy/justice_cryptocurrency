import { NavLink } from 'react-router-dom';

import { StylesBox } from './StylesBox.styles';

export const CustomNavLink = ({ path, image, text }) => {
  return (
    <NavLink to={path}>
      <StylesBox>
        <StylesBox mode="image"
        >
          <img src={image}
               alt="Not found"
          />
        </StylesBox>
        <StylesBox mode="text">
          {text}
        </StylesBox>
      </StylesBox>
    </NavLink>
  )
}
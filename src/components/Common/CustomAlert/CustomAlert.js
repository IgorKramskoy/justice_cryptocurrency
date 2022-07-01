import { AlertStyled} from './CustomAlert.styles';

export const CustomAlert = ( {text, color, isSmall}) => {
  return (
    <AlertStyled
      color={color}
      icon={false}
      isSmall={isSmall}
    >
      { text }
    </AlertStyled>
  )
}

import { ButtonStyled } from "./CustomButton.styles";

export const CustomButton = ({ text, size, variant, disabled, color, onClick, type }) => {
    return (
        <ButtonStyled
            type={type}
            disabled={disabled}
            size={size}
            variant={variant}
            color={color}
            onClick={onClick}
        >
            {text}
        </ButtonStyled>
    )
}
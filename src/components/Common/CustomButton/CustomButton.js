import { ButtonStyled } from "./CustomButton.styles";

export const CustomButton = ({ text, size, variant, disabled, color }) => {
    return (
        <ButtonStyled
            disabled={disabled}
            size={size}
            variant={variant}
            color={color}
        >
            {text}
        </ButtonStyled>
    )
}
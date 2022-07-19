import * as Yup from 'yup';
import * as Validation from '../../../../validationConstants';

export const ConfirmationFormValidation = Yup.object().shape({
  number: Yup.string()
    .matches(/^[0-9]+$/, "Не номер карты")
    .min(16, Validation.TOOSHORT)
    .required(),
  name: Yup.string()
    .min(6, Validation.TOOSHORT)
    .max(50, Validation.TOOLONG)
    .required(Validation.REQUIRED),
});
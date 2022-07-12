import * as Yup from 'yup';
import * as Validation from '../../../../validationConstants';

export const CardFormValidation = Yup.object().shape({
  number: Yup.string()
    .matches(/^[0-9]+$/, "Не номер карты")
    .min(16, Validation.TOOSHORT)
    .required(),
  date: Yup.string(Validation.DATE)
    .max(5, 'Неверно указана дата. Например: MM/YY')
    .matches(
      /([0-9]{2})\/([0-9]{2})/,
      'Неверно указана дата. Например: MM/YY'
    )
    .required(Validation.REQUIRED),
  cvc: Yup.string()
    .min(3, Validation.TOOSHORT)
    .max(3, Validation.TOOLONG)
    .required(Validation.REQUIRED),
  name: Yup.string()
    .min(6, Validation.TOOSHORT)
    .max(50, Validation.TOOLONG)
    .required(Validation.REQUIRED),
});
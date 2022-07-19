import React from 'react';
import { useFormik } from 'formik';

import { Box, Button } from '@mui/material';
import { CustomTextField } from '../../../Common/CustomTextField';
import { CardFormValidation } from './CardFormValidation';
import { FormCardStyled } from './CardForm.styles';

export const CardForm = ({ handleOpen, handleSubmit, handleNext }) => {
  const formik = useFormik({
    initialValues: {
      number: '',
      date: '',
      cvc: '',
      name: '',
    },
    validationSchema: CardFormValidation,
    onSubmit: () => {
      // handleOpen();
      handleSubmit();
      handleNext();
    },
  });

  const handler = () => {
    formik.handleSubmit()
    handleNext()
  }

  return (
    <FormCardStyled onSubmit={formik.handleSubmit}>
      {/*map*/}
      <Box sx={{ width: '100%' }}>
        <CustomTextField
          label='Номер карты'
          value={formik.values.number}
          name="number"
          error={formik.errors.number && formik.touched.number}
          onChange={formik.handleChange}
          type="text"
          errorMessage={formik.errors.number}
          touched={formik.touched.number}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <CustomTextField
          label='Даты'
          value={formik.values.date}
          name="date"
          error={formik.errors.date && formik.touched.date}
          onChange={formik.handleChange}
          type="text"
          errorMessage={formik.errors.date}
          touched={formik.touched.date}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <CustomTextField
          label='CVC'
          value={formik.values.cvc}
          name="cvc"
          error={formik.errors.cvc && formik.touched.cvc}
          onChange={formik.handleChange}
          type="text"
          errorMessage={formik.errors.cvc}
          touched={formik.touched.cvc}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <CustomTextField
          label='Владелец карты'
          value={formik.values.name}
          name="name"
          error={formik.errors.name && formik.touched.name}
          onChange={formik.handleChange}
          type="text"
          errorMessage={formik.errors.name}
          touched={formik.touched.name}
        />
      </Box>
      <Button
        type="submit"
        size="large"
        variant="contained"
        color="primary"
        onClick={handler}
      >
        Пополнить кошелек
      </Button>
    </FormCardStyled>
  );
}
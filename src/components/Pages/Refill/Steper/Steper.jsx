import * as React from 'react';

import {
  Box,
  Step,
  StepLabel,
  StepContent,
  Typography
} from '@mui/material';
import {  StepperStyles } from './Steper.styles';

const steps = [
  {
    label: 'Выбор валюты',
    description: `Выберите подходящую вам валюту.`,
  },
  {
    label: 'Проверка ',
    description:
      'Пройдите проверку персональных данных',
  },
  {
    label: 'Пополнение',
    description: `После заполнения всех полей деньги поступят на счет.`,
  },
];

export const Steper = ({ activeStep }) => {
  return (
    <Box sx={{ maxWidth: 400}}>
      <StepperStyles activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} >
            <StepLabel>
              {step.label}
            </StepLabel>
            <StepContent TransitionComponent="None">
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </StepperStyles>
    </Box>
  );
}
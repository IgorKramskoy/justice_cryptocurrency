import * as React from 'react';

import {
  Box,
  Step,
  StepLabel,
  StepContent,
  Typography
} from '@mui/material';
import { StepperStyles } from './Steper.styles';

export const Steper = ({activeStep, steps}) => {
  return (
    <Box sx={{maxWidth: 400}}>
      <StepperStyles activeStep={activeStep} orientation="vertical">
        {steps.map((step) => (
          <Step key={step.label}>
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
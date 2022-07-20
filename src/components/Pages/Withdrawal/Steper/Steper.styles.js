import { Stepper, styled } from '@mui/material';

export const StepperStyles = styled(Stepper)(() => ({
  ['& .MuiStepContent-root']: {
    color: '#8C939D',
    fontSize: '12px',
    border: 'none',
    textAlign: 'start',
    padding: '0px',
    margin: '0px',
  },
  ['& .MuiStep-root']: {
    marginTop: '30px',
  },
  ['& .MuiStepConnector-line']: {
    color: '#FFFFFF',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    borderLeft: 'none',
  },

  ['& .MuiStepLabel-labelContainer']: {
    color: '#8C939D',
    fontSize: '12px',
    textAlign: 'start',
  },
  ['& .MuiStepLabel-label.Mui-active']: {
    color: '#FFFFFF',
    fontSize: '18px',
  },
  ['& .MuiStepLabel-label.Mui-completed']: {
    color: '#FFFFFF',
    fontSize: '14px',
  },
  ['& .MuiStepLabel-root']: {
    color: '#FFFFFF',
    fontSize: '14px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '10px',
  },
  ['& .MuiTypography-root']: {
    color: '#8C939D',
    fontSize: '12px',
  },
  ['& .MuiSvgIcon-root']: {
    color: '#282F39',
  },
  ['& .MuiSvgIcon-root.Mui-completed']: {
    color: '#282F39',
  },
  ['& .MuiSvgIcon-root.Mui-active']: {
    color: '#6D76F7',
  },
}))

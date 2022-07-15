import { createTheme } from '@mui/material';

export const customTheme = createTheme({
  palette: {
    info: {
      main: '#282B30',
    },
    primary: {
      main: '#7164FF',
    },
    success: {
      main: '#0ECB81',
    },
    error: {
      main: '#D24242',
    },
    warning: {
      main: '#CBB80E',
    },
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          padding: '8px 16px',
        },
        sizeMedium: {
          padding: '12px 24px',
        },
        sizeLarge: {
          padding: '15px 24px',
        },
        root: {
          color: '#FFFFFF',
          textTransform: 'none',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          // border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 3,
          '& .MuiInputAdornment-root': {
            color: '#8C939D',
          },
          '&.Mui-focused .MuiInputAdornment-root': {
            color: '#FFFFFF',
          },
        },
        inputRoot: {
          padding: '5px 20px',
        },
        input: {
          color: '#8C939D',
        },
        clearIndicator: {
          color: '#FFFFFF',
        },
        popupIndicator: {
          display: 'none',
        },
        popper: {
          borderRadius: 3,
        },
        listbox: {
          backgroundColor: '#191F29',
          padding: 0,
          '& .MuiAutocomplete-option': {
            padding: '16px 0',
          },
        },
        option: {
          color: '#FFFFFF',
          opacity: 0.7,
          margin: '0 16px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          '&:last-child': {
            borderBottom: 'none',
          },
        },
        inputFocused: {
          color: '#FFFFFF',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 3,
          label: {
            color: '#8C939D',
            fontSize: '0.875rem',
            '&.Mui-focused, &.Mui-disabled, &.Mui-error': {
              color: '#8C939D',
            },
            '&.MuiInputLabel-shrink': {
              top: 15,
              left: 2,
            },
          },
          '& .MuiOutlinedInput-root': {
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 3,
          },
          '& .MuiOutlinedInput-root.Mui-error': {
            border: '1px solid #D24242',
          },
          input: {
            color: '#FFFFFF',
            fontSize: '0.875rem',
            padding: '22px 16px 10px',
          },
          '& .Mui-disabled': {
            background: '#1C2027',
            color: '#FFFFFF',
          },
          '& .Mui-error .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '& .MuiFormHelperText-root.Mui-error': {
            margin: 0,
            fontSize: '0.6875rem',
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 0.2)',
          '& .MuiSvgIcon-root': {
            fontSize: '1.1rem',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          padding: '4px 8px',
          height: theme.spacing(3),
          borderRadius: 3,
          color: theme.palette[ownerState.color].main,
          backgroundColor:
            (ownerState.color === 'success' && 'rgba(14, 203, 129, 0.1)') ||
            (ownerState.color === 'warning' && 'rgba(203, 184, 14, 0.1)') ||
            (ownerState.color === 'error' && 'rgba(235, 107, 107, 0.1)'),
        }),
        label: {
          padding: 0,
        },
      },
    },
    MuiAlert: {
      variants: [
        {
          props: { variant: 'filledMedium' },
          style: {
            height: 40,
          },
        },
        {
          props: { variant: 'filledLarge' },
          style: {
            height: 48,
          },
        },
      ],
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          padding: '4px 8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: theme.spacing(3),
          borderRadius: 3,
          color: theme.palette[ownerState.color].main,
          border: `1px solid ${theme.palette[ownerState.color].main}`,
          backgroundColor:
            (ownerState.color === 'success' && 'rgba(14, 203, 129, 0.05)') ||
            (ownerState.color === 'warning' && 'rgba(203, 184, 14, 0.05)') ||
            (ownerState.color === 'error' && 'rgba(235, 107, 107, 0.05)'),
        }),
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: '#AEB2B8',
          backgroundColor: '#282F39',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: '#191F29',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0px 26px 32px -9px rgba(11, 13, 18, 0.6)',
          borderRadius: '3px',
          width: 284,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 16,
          color: '#8C939D',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          color: '#8C939D',
          padding: '0 32px 32px',
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          borderRadius: 3,
          '&.Mui-selected': {
            backgroundColor: '#282F39',
          },
          '&:hover': {
            background: 'linear-gradient(270deg, #7164FF 0%, #682DFE 100%), #282F39;',
          },
        },
      },
    },
  },
});
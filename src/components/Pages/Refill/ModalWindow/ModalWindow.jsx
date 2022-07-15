import React from 'react';

import {
  DialogContent,
  Dialog,
  DialogTitle,
  Typography
} from '@mui/material';
import close from '../../../../assets/images/x.svg';
import modal from '../../../../assets/images/modal.svg';

export function SimpleDialogDemo({ open, handleClose }) {
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        <img src={close} alt='close' onClick={handleClose}/>
      </DialogTitle>
      <DialogContent sx={{ gap: '10px'}}>
        <img src={modal} alt='modal icon'/>
        <Typography variant='subtitle1' sx={{ color: '#FFFFFF'}}>
          Пополнение прошло успешно
        </Typography>
        <Typography variant='subtitle2' sx={{ color: '#8C939D'}}>
          Вы успешно пополнили свой кошелек.
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

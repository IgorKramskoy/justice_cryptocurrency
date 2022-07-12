import React from 'react';

import { DialogContent, Dialog } from '@mui/material';

export function SimpleDialogDemo({ open, handleClose }) {
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogContent>

      </DialogContent>
    </Dialog>
  );
}

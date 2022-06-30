import { CustomButton } from './Common/CustomButton';
import { CustomChip } from './Common/CustomChip';
import { CustomTextField } from './Common/CustomTextField';
import React from 'react';

export const Test = () => {
  return (
    <>
      <div>
        <CustomButton size="large" variant="contained" text="Button" disabled={false} color="primary"/>
        <CustomButton size="medium" variant="contained" text="Button" disabled={false} color="success"/>
        <CustomButton size="small" variant="contained" text="Button" disabled={false} color="error"/>
        <CustomButton size="small" variant="contained" text="Button" disabled={false} color="info"/>
      </div>
      <div>
        <CustomChip label="Успешно" color="error"/>
        <CustomChip label="В обработке" color="warning"/>
        <CustomChip label="Отклонено" color="success"/>
      </div>

      <CustomTextField id="outlined-basic" label="Имя" variant="outlined" />

    </>
  )
}
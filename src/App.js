import React from 'react';

import { CustomButton } from './components/Common/CustomButton';
import { CustomChip } from './components/Common/CustomChip';

import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;

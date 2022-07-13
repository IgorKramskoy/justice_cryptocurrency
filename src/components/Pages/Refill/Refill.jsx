import React, { useState, useEffect } from 'react';

import {
  Box,
  Button,
  TextField,
  Typography
} from '@mui/material';
import { Steper } from './Steper';
import {
  Content,
  ContentHeader,
  ContentLeft,
  ContentRight,
  ContentСontainer
} from './Refill.styles';
import * as Navigate from '../../../routesNavigate';
import { useNavigate } from 'react-router-dom';
import { CardForm} from './CardForm';
import { SimpleDialogDemo } from './ModalWindow';
import { AutocompleteStyled } from '../Market/CustomAutocomplete.styled';

export const Refill = () => {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const goToWallet = () => {
    navigate(Navigate.WALLET)
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate(Navigate.WALLET);
  };

  const currencies =  [
    {
      label: 'RUB'
    },
    {
      label: 'USD'
    },
  ]
  const [filteredRows, setFilteredRows] = useState([]);

  const onChange = (event, newValue) => {
    if(!newValue){
      setFilteredRows(currencies)
    } else {
      setFilteredRows(currencies.filter((item) => (
        item.label.includes(newValue.label)
      )))
    }
  }
  const handleSearch = (e) => {
    if(!e.target.value){
      setFilteredRows(currencies)
    } else {
      setFilteredRows(currencies.filter((item) => (
        item.label.toLowerCase().includes(e.target.value.toLowerCase())
      )))
    }
  }

  useEffect( () => {
    if (filteredRows.length === 0) {
      setFilteredRows(currencies)
    }
  }, [currencies]);

  return (
    <ContentСontainer >
      <Content>
        <ContentHeader>
          <Box >
            <Typography sx={{color: '#FFFFFF',}} variant="h5">Пополнение</Typography>
          </Box>
          <Box >
            <Button
              type="submit"
              size="small"
              variant="contained"
              color="info"
              onClick={goToWallet}
            >
              Вернуться назад
            </Button>
          </Box>
        </ContentHeader>
        <Box sx={{ display: 'flex', flexDirection: 'row', }}>
          <ContentLeft>
            { activeStep === 0 ? (
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', paddingTop: '20px',}}>
                <Typography sx={{color: '#FFFFFF'}} variant="subtitle1">Выберите валюту для пополнения</Typography>
                <Box sx={{ color: '#FFFFFF'}}>
                  <AutocompleteStyled
                    disablePortal
                    options={filteredRows}
                    onChange={onChange}
                    getOptionLabel={(options) => options.label}
                    renderInput={(params) => <TextField {...params} onChange={handleSearch} label="Поиск валюты" />}
                  />
                </Box>
                <Button
                  type="submit"
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Продолжить
                </Button>
              </Box> ) : null}
            { activeStep === 1 ? (
              <Box sx={{ textAlign:'start'}}>
                <Typography sx={{color: '#FFFFFF'}} variant="subtitle1">Введите данные для пополнения</Typography>
                <CardForm handleOpen={handleOpen} />
              </Box> ) : null}
            { open ? (
              <Box>
                <SimpleDialogDemo open={open} handleClose={handleClose}/>
              </Box> ) : null}
          </ContentLeft>
          <ContentRight >
            <Steper activeStep={activeStep}/>
          </ContentRight>
        </Box>
      </Content>
    </ContentСontainer>
  );
}
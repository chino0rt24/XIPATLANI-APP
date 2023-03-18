import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Paquetes from './Paquetes';
import useForm from '../components/hooks/useForm';
import Autocomplete from '@mui/material/Autocomplete';
import DatePicker from 'react-date-picker';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';
import { ApiWallet, ROUTES } from '../Api';
const theme = createTheme();

export default function Cobro() {
  const [selectedPack,setSelectedPack] = useState(false);
  const [value, onChanges] = useState(new Date());
  const navigate = useNavigate();
  const { form, onChange } = useForm({  });
  const [customers,setCustomers] = useState([{label:''}])

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify({_id:"sdasdasdawdasd"}) )
  })

const getCustomers = async(search) => {
  try {
    (await ApiWallet())
    .post(ROUTES.GET_CUSTOMERS, JSON.stringify({search}) )
    .then(success => {
      console.log(success.data.data.map(item => item.name));
      setCustomers(success.data.data.map(item => item.name + ' ' + item.lastname))
    })
    .catch(error => {
      console.log(error);
    })
  } catch (error) {
    console.log(error);
  }
};

const save = async() => {
  console.log(localStorage.getItem('user'));
  const user = JSON.parse(localStorage.getItem('user'));

  console.log({...form, idEmployee:user._id});
  (await ApiWallet())
  .post(ROUTES.CREATE_COBRO, JSON.stringify({customer: {...form, idEmployee:user._id}}) )
  .then(success => {
   
  })
  .catch(error => {
    console.log(error);
  })

}


  return (
    <ThemeProvider theme={theme}>
      <Container 
      component="main" 
      maxWidth="sm"
       > 
        <CssBaseline />  
        <Card  noValidate sx={{ mt: 1, display:"flex", flexWrap:"wrap" ,justifyContent:"space-around", flex:1, borderRadius:5 ,width: selectedPack !== true ? 550: 750,height:650,}}>
        <Box
          sx={{flex:1,display:"flex", flexWrap:"wrap" ,flexDirection:"column",alignItems:"center" }}>
            <CancelIcon
            sx={{alignSelf:"self-end",marginTop:2, marginRight:2}}
            onClick={() => navigate('/')}     
          />
          <Typography
          component="h1"
          variant="h5"
          sx={{marginTop:5}}
          >
         Registra el cobro de internet
        </Typography>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={customers}
      sx={{ width: 250,marginTop:7 }}
      onInputChange={(event, newInputValue) => {onChange(newInputValue, "name")
    getCustomers(newInputValue)
    }}
      renderInput={(params) =>  <TextField {...params} label="Cliente" 
      />}
    />
              <TextField
              margin="normal"
              required
              id="mount"
              label="Monto$"
              name="Monto"
              autoComplete="Monto"
              autoFocus
              sx={{width:250,marginTop:7}}
              onChange={value => onChange(value.target.value,"mount")}
            />
            <Box
            sx={{marginTop:6, justifyContent:"center"}}>
            <DatePicker  onChange={(e) => onChange(e, "date") } value={value} />
            </Box>
            <Button
              type="save"
              variant="contained"
              sx={{ mt: 2, mb: 3, width:200, marginLeft:1,borderRadius:5,marginTop:7 }}
              onClick={() =>{ 
                save()
              }}
              >
              Guardar
            </Button> 
            </Box> 
          </Card>
      </Container>
    </ThemeProvider>
  );}


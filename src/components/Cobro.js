import React, { useState } from 'react';
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




const theme = createTheme();


export default function Cobro() {
  const [selectedPack,setSelectedPack] = useState(false);
  const [value, onChanges] = useState(new Date());
  const navigate = useNavigate();

 const { form, onChange } = useForm({  });
  const save = async ()=>{
    console.log(form)
  }

   
  


  return (
    <ThemeProvider theme={theme}>
      <Container 
      component="main" 
      maxWidth="sm"
      
      > 
        <CssBaseline />
    
        
        <Card   noValidate sx={{ mt: 1, display:"flex", flexWrap:"wrap" ,justifyContent:"space-around", flex:1, borderRadius:5 ,width: selectedPack !== true ? 550: 750,height:650,}}>
      
         
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
      options={top100Films}
      sx={{ width: 250,marginTop:7 }}
      renderInput={(params) => <TextField {...params} label="Cliente" />}
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
              onChange={value => onChange(value.target.value,"Monto")}

            />
            <Box
            sx={{marginTop:6, justifyContent:"center"}}>
            <DatePicker  onChange={onChanges} value={value} />
            </Box>
             
            <Button
              type="save"
              variant="contained"
              sx={{ mt: 2, mb: 3, width:200, marginLeft:1,borderRadius:5,marginTop:7 }}
              onClick={() =>{ 
              save();
              
              }}
              >
            
              Guardar
            </Button> 
            
            </Box> 
          </Card>
        
      </Container>
    </ThemeProvider>
  );}
  const top100Films = [
    { label: 'Camerino Ortega', year: 1994 },
    { label: 'Lidia ortega', year: 1972 },
    { label: 'Jesus tehuatle', year: 1974 },
    { label: 'Veronica Garcia', year: 2008 },
    { label: 'Romario Velazques', year: 1957 },
    { label: "Alfredo sanchez", year: 1993 },
    { label: 'Beto  Mezhua', year: 1994 },
    { label: "Cristobal Amayo", year: 1993 },
    { label: 'Rafel herndez', year: 1994 },

];

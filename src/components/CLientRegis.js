import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Cobros from '../components/Cobros';
import useForm from '../components/hooks/useForm';



const theme = createTheme();


export default function CLientRegis() {
  const [selectedPack,setSelectedPack] = useState(false);
 const { form, onChange } = useForm({  });
  const save = async ()=>{
    console.log(form)
  }

   
  


  return (
    <ThemeProvider theme={theme}>
      <Container 
      component="main" 
      maxWidth="sm"
      sx={{}}
      > 
        <CssBaseline />
    
        
        <Card   noValidate sx={{ mt: 1, display:"flex", flexWrap:"wrap" ,justifyContent:"space-around", flex:1, borderRadius:5 ,width: selectedPack !== true ? 550: 750,height:650,}}>
          <Box 
          sx={{padding:3 , marginInline:4}}
          >

         
          <Typography component="h1" variant="h5">
          {selectedPack !== true ? "Registra al nuevo cliente" : "Selecciona el paquete adecuado" }
          </Typography>
          </Box>
      {selectedPack !== true ?
         
           <Box
          sx={{flex:1,display:"flex", flexWrap:"wrap" ,justifyContent:"space-around", flex:1, }}>

   <TextField
              margin="normal"
              required
              id="name"
              label="Nombre"
              name="Nombre"
              autoComplete="Nombre"
              autoFocus
              sx={{width:250}}
              onChange={value => onChange(value.target.value,"name")
                
              }
            />
                <TextField
              margin="normal"
              required

              id="lasName"
              label="Apellidos"
              name="Apellidos"
              autoComplete="Apellidos"
              autoFocus
              sx={{width:250}}
              onChange={value => onChange(value.target.value,"lastName")}

            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="Correo Electronico"
              autoComplete="Correo Electronico"
              autoFocus
              sx={{justifyContent:"space-around", marginLeft:1.5, marginRight:1.5}}
              onChange={value => onChange(value.target.value,"email")}

            />
                <TextField
              margin="normal"
              required
              id="phone"
              label="Teléfono"
              name="Telefono"
              autoComplete="Telefono"
              autoFocus
              sx={{width:250}}
              onChange={value => onChange(value.target.value,"phone")}

            />
                <TextField
              margin="normal"
              required
              id="Cp"
              label="Código Postal"
              name="Codigo Postal"
              autoComplete="Código Postal"
              autoFocus
              sx={{width:250}}
              onChange={value => onChange(value.target.value,"cp")}
            />
               
             <TextField
              margin="normal"
              fullWidth
              required
              id="Domicilio"
              label="Ciudad o Localidad"
              name="Ciudad o Localidad"
              autoComplete="Ciudad o Localidad"
              autoFocus
              sx={{justifyContent:"space-around", marginLeft:1.5, marginRight:1.5}}
              onChange={value => onChange(value.target.value,"CiudadLocalidad")}

            />
         
             <TextField
              margin="normal"
              required
              fullWidth
              id="Ref"
              label="Referencia"
              name="Referencia"
              autoComplete="Referencia"
              autoFocus
              sx={{justifyContent:"space-around", marginLeft:1.5, marginRight:1.5}}
              onChange={value => onChange(value.target.value,"referencia")}
              


            />

            
          
            <Button
              type="save"
              variant="contained"
              sx={{ mt: 2, mb: 3, width:200, marginLeft:1,borderRadius:5, }}
              onClick={() =>{ 
              setSelectedPack(true); 
              save();
              
              }}
              >
            
              Siguiente
            </Button> 
            
            </Box> :  <Cobros form={form}/>
            
         

} 
          </Card>
        
      </Container>
    </ThemeProvider>
  );
}
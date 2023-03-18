import React, { useState, useEffect  } from 'react';
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
import CancelIcon from '@mui/icons-material/Cancel';

import { useNavigate } from 'react-router-dom';



const theme = createTheme();


export default function CLientRegis() {
  const [selectedPack,setSelectedPack] = useState(false);
  const [regisClient, setRegisClient] =useState({
    name:"",
    lastname:"",
    phone:0,
    email:"",
    cp:0,
    CiudadLocalidad:{},
    referencia:"",

  })

 const { form, onChange } = useForm({  });
 const navigate = useNavigate();
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
          sx={{  width:"100%",display:"flex",flexDirection:"row",alignItems:"center"}}
          >
     
         
          <Typography component="h1" variant="h5" sx={{flex:20, textAlign:"center"}}>
          {selectedPack !== true ? "Registra al nuevo cliente" : "Selecciona el paquete adecuado" }
          </Typography>
          <CancelIcon
        sx={{justifySelf:"flex-end",flex:1,alignSelf:"self-start",marginRight:2,marginTop:2}}
        onClick={() => selectedPack !== true ? navigate('/'): setSelectedPack(false)}     
      />
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
              // onChange={e => onChange({value,...setRegisClient,name:""})
                
              // }
              onChange={ (e)=>{
                setRegisClient({...regisClient, name:e.target.value})
                }}
            
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
              onChange={e => setRegisClient({...regisClient,lastname:e.target.value})}

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
              onChange={value => onChange(value,"email")}

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
              onChange={value => onChange(value,"phone")}

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
              onChange={value => onChange(value,"cp")}
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
            
            </Box> :  <Paquetes form={form}/>
            
         

} 
          </Card>
        
      </Container>
    </ThemeProvider>
  );
}
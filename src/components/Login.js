import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useForm from '../components/hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { ApiWallet, ROUTES } from '../Api';

const theme = createTheme();

export default function Login() {
  const { form, onChange } = useForm({  });
  const save = async ()=>{
    console.log(form)
  };

  const login = async()=>{
    (await ApiWallet())
    .post(ROUTES.USER_LOGIN, JSON.stringify({...form}))
    .then(response=>{
      localStorage.setItem("user",JSON.stringify(response.data.data.user));
      navigate('/')
      console.log(response.data.data.user)
    })
    .catch(error => {
      console.log('ERROR SIGNUP:');
    });
  };
  const navigate = useNavigate();


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar 
          sx={{ width: 150, height: 150 }}
          src={require("../assets/Images/LOGO-icon.jpg")}
          >
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicia sesión
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="usuario"
              name="Usuario"
              autoComplete="Usuario"
              autoFocus
              onChange={value => onChange(value.target.value,"username")}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Contraseña"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={value => onChange(value.target.value,"password")}

            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuerdame"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() =>{
                save();
                // navigate('/');
                login();
              
              }}
              >
              Inicia sesión
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
               
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
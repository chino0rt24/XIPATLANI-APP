import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

import Checkbox from '@mui/material/Checkbox';
import { ApiWallet, ROUTES } from '../Api';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const tiers = [
  
  {
    title: 'Basico',
    price: '400',
    description: [
      '5 MB de internet',
      'Soporte remoto',
    ],
    buttonText: 'Contratar',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Más popular',
    price: '600',
    description: [
      
      '7 MB de internet',
      'Soporte remoto',
    ],
    buttonText: 'Contratar',
    buttonVariant: 'contained',
  },
  {
    title: 'Premium',
    price: '750',
    description: [
      '10 MB de internet',
      'Soporte remoto',
    ],
    buttonText: 'Contratar',
    buttonVariant: 'outlined',
  },
];

function PricingContent({form}) {
  const [checked,setChecked] = useState([true, false, false]);

  const handleChange = (event, index) => {
   let arr = [false, false, false];
    arr[index] = event.target.checked
    setChecked(arr);
  };

  const save = async() => {
    const indexPack = checked.findIndex(el => el == true);
    // console.log({...form, package: tiers[indexPack].title});
    (await ApiWallet())
    .post(ROUTES.CREATE_CUSTOMER, {...form, package: tiers[indexPack].title} )
    .then(response => {
      if(response.data.success){
        alert("Registro exitoso")
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
  
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier, idx) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                     
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mx
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  {/* <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button> */}
                        <Checkbox {...label} 
                        checked={checked[idx]}
                        onChange={e => handleChange(e, idx )}
                        /> Seleccionar

                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      <Button
              type="save"
              variant="contained"
              sx={{ mt: 2, mb: 1, width:200,height:50, marginLeft:1,borderRadius:5, }}
              onClick={save}
              >
            
              Guardar
            </Button> 
    </React.Fragment>
  );
}

export default function Pricing({form}) {
  return <PricingContent form={form} />;
}
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import GroupsIcon from '@mui/icons-material/Groups';
import BarChartIcon from '@mui/icons-material/BarChart';
import PublicIcon from '@mui/icons-material/Public';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const MainListItems = ({navigate}) =>
{
  return(
    <React.Fragment>
      <ListItemButton  onClick={() => navigate('/')} >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="INICIO" />
      </ListItemButton>
      <ListItemButton  onClick={() => navigate('/Cobro')} >
        <ListItemIcon>
          <PriceChangeIcon />
        </ListItemIcon>
        <ListItemText primary="COBROS" />
      </ListItemButton>
      <ListItemButton  onClick={() => navigate('/users')} >
        <ListItemIcon>
          <GroupsIcon />
        </ListItemIcon>
        <ListItemText primary="Clientes" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reportes" />
      </ListItemButton>
      <ListItemButton  onClick={() => navigate('/map')} >
        <ListItemIcon>
          <PublicIcon />
        </ListItemIcon>
        <ListItemText primary="Mapa" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/login')}>
        <ListItemIcon>
        <ExitToAppIcon/>
        </ListItemIcon>
        <ListItemText primary="Salir" />
      </ListItemButton>
    </React.Fragment>
  );
}

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Generar Reportes
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Reporte de mes" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Reporte cliente" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Reporte de año" />
    </ListItemButton>
  </React.Fragment>
);
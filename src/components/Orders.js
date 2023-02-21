import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Feb, 2023',
    'Julian',
    'ZONGOLICA',
    'EFECTIVO',
    312.44,
  ),
  createData(
    1,
    '16 Feb, 2023',
    'Paola',
    'Loma',
    'EFECTIVO',
    866.99,
  ),
  createData(2,
     '16 Mar, 2019',
      'Tomas',
      'Loma de Dolores',
       'EFECTIVO',
      100.81),
  createData(
    3,
    '16 Feb, 2023',
    'Rafa',
    'IXPALUCA',
    'EFECTIVO',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Meliton',
    'Palapa',
    'EFECTIVO',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Cobros Recientes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>FECHA</TableCell>
            <TableCell>NOMBRE</TableCell>
            <TableCell>UBICACIÓN</TableCell>
            <TableCell>METODO DE PAGO</TableCell>
            <TableCell align="right">MONTO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
      Ver mas Cobros
      </Link>
    </React.Fragment>
  );
}
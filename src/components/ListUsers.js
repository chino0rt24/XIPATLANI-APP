import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useNavigate } from 'react-router-dom';
import { ApiWallet, ROUTES } from '../Api';

const columns = [
  { id: 'name', label: 'Cliente', minWidth: 170 },
  {
    id: 'dateCourt',
    label: 'Fecha de corte',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'amount',
    label: 'Monto de pago$',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'phone',
    label: 'Teléfono',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),

  },
  {
    id: 'place',
    label: 'Domicilio',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),

  },
  
];




const StickyHeadTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [rows, setRows] = useState([])
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const ColorToggleButton = () => {
    const [alignment, setAlignment] = React.useState('web');
  
    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  
    return (
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        sx={{alignSelf:'flex-end'}}
      >
        <ToggleButton value="android"
        onClick={() => navigate('/CLientRegis')}
        sx={{marginRight:5}}
        >Nuevo Cliente</ToggleButton>
      </ToggleButtonGroup>
    );
  }

  const getData = async () => {
    (await ApiWallet())
    .post(ROUTES.GET_ALL_CUSTOMERS, {})
    .then(response => {
      setRows(response.data.data)
    })
  }

  useEffect(() => {
   getData()
  },[])

  return (
    <Paper sx={{ width: '100%', display:'flex', flexDirection:'column', overflow: 'hidden' }}>
      <ColorToggleButton />
      <TableContainer sx={{ maxHeight:500}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 40, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default StickyHeadTable
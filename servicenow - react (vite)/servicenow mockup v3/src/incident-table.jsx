import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(day, incidents, requests, catalog, total) {
  return { day, incidents, requests, catalog, total };
}

const rows = [
  createData('29/03/2026', 11, 4, 3, 18),
  createData('30/03/2026', 23, 12, 2, 37),
  createData('31/03/2026', 15, 1, 2, 18),
  createData('1/4/2026', 42, 23, 3, 68),
  createData('2/4/2026', 21, 3, 3, 27),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Incidents</TableCell>
            <TableCell>Requests</TableCell>
            <TableCell>Catalog Tasks</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.day}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.day}
              </TableCell>
              <TableCell align="right">{row.incidents}</TableCell>
              <TableCell align="right">{row.requests}</TableCell>
              <TableCell align="right">{row.catalog}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

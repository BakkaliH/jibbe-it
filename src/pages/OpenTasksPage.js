import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Page from '../components/Page';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(senderlocation, destination, typeproduct, size, timewindow) {
  return { senderlocation, destination, typeproduct, size, timewindow};
}

const rows = [
  createData('ESITH','EHTP', 'food', '15*24*23', '01/11/2020'),
  createData('EHTP', 'ESITH', 'material', '15*24*23', '01/11/2020'),
  createData('ENSEM', 'ECC', 'Laptops', '15*24*23', '01/11/2020'),
  createData('ECC', 'EMSI', 'food', '15*24*23', '01/11/2020'),
  createData('EMSI', 'ENSEM', 'food', '15*24*23', '01/11/2020'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function OpenTasksPage() {
  const classes = useStyles();

  return (
    <Page title="Open Tasks" breadcrumbs={[{ name: 'Transport', active: true }]}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sender Location</StyledTableCell>
            <StyledTableCell align="right">Destination</StyledTableCell>
            <StyledTableCell align="right">Type of Product</StyledTableCell>
            <StyledTableCell align="right">Size&nbsp;(dm*dm*dm)</StyledTableCell>
            <StyledTableCell align="right">Time Window</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.senderlocation}>
              <StyledTableCell component="th" scope="row">
                {row.senderlocation}
              </StyledTableCell>
              <StyledTableCell align="right">{row.destination}</StyledTableCell>
              <StyledTableCell align="right">{row.typeproduct}</StyledTableCell>
              <StyledTableCell align="right">{row.size}</StyledTableCell>
              <StyledTableCell align="right">{row.timewindow}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Page>
  );
};


import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import Page from '../components/Page';

const columns = [
  { id: 'tournee', label: 'Tournee', minWidth: 170 },
  { id: 'sender', label: 'Sender', minWidth: 170 },
  { id: 'starttime', label: 'Earliest Start', minWidth: 170 },
  { id: 'finishtime', label: 'Latest Arrival', minWidth: 170 },
  {
    id: 'path',
    label: 'Path',
    minWidth: 170,
    align: 'right',
  },
 
];

function createData(tournee,sender, starttime, finishtime, path) {
  //const density = population / size;
  return { tournee, sender, starttime, finishtime, path };
}

const rows = [
  createData('Tournee1', 'Anas','14/11/2019 14:00', '14/11/2019 18:00'),
  createData('Tournee2','Hamza', '14/11/2019 14:00', '14/11/2019 18:00'),
  createData('Tournee3','Ayoub','14/11/2019 14:00', '14/11/2019 18:00'),
  createData('Tournee4', 'User', '14/11/2019 14:00', '14/11/2019 18:00'),
  createData('Tournee5', 'User','14/11/2019 14:00', '14/11/2019 18:00'),
  createData('Tournee6', 'User','14/11/2019 14:00', '14/11/2019 18:00'),
  createData('Tournee7', 'User','14/11/2019 14:00', '14/11/2019 18:00'),
  createData('Tournee8', 'User','14/11/2019 14:00', '14/11/2019 18:00'),
  createData('Tournee9', 'User','14/11/2019 14:00', '14/11/2019 18:00'),
  createData('Tournee10', 'User','14/11/2019 14:00', '14/11/2019 18:00'),
  createData('Tournee11', 'User','14/11/2019 14:00', '14/11/2019 18:00'),
  createData('Tournee12','User', '14/11/2019 14:00', '14/11/2019 18:00'),
  createData('Tournee13', 'User','14/11/2019 14:00', '14/11/2019 18:00'),
  createData('Tournee14', 'User','14/11/2019 14:00', '14/11/2019 18:00'),
  createData('Tournee15', 'User','14/11/2019 14:00', '14/11/2019 18:00'),
];


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function WithASenderPage(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const mapStyles = {
    width: '100%',
    height: '100%',
    position: 'relative'
  };
  return (
    <Page title="With a Sender" breadcrumbs={[{ name: 'With a Sender', active: true }]}>
      <Paper className={classes.root}>
      <TableContainer className={classes.container}>
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.tournee}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.sender}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.starttime}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.finishtime}
              </TableCell>
              <TableCell align="right"><Button variant="contained"
               color="primary" onClick={handleClickOpen}
          endIcon={<LocationOnIcon />}>Path</Button>
<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Your Path
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Cancel
            </Button>
          </Toolbar>
        </AppBar>
        <div >
        <Map style={mapStyles} google={props.google} zoom={14}>
        
        <Marker onClick={props.onMarkerClick}
                name={'Current location'} />

        
        </Map></div>
      </Dialog>
              </TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </Page>
  );
};

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCDdI28jL4fyKickwWHplQrneOAj0avNGg")
})(WithASenderPage);

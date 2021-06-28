import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components
import LoadingSpinner from './LoadingSpinner';

// MUI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MUITable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getSchedules, deleteSchedule } from '../redux/actions/dataActions';

const useStyles = makeStyles((theme) => ({}));

export default function DataTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  console.log(data);

  useEffect(() => {
    dispatch(getSchedules());
  }, []);

  const handleClick = (id) => {
    dispatch(deleteSchedule(id));
    console.log(id);
  };

  return (
    <>
      {data.loading ? (
        <LoadingSpinner loading={true} />
      ) : data.schedules.length === 0 ? (
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item>
            <Typography variant='body2'>
              Currently, there is not data to display.
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item>
            <TableContainer component={Paper}>
              <MUITable
                className={classes.table}
                aria-label='table'
                style={{ minWidth: '400px' }}
              >
                <TableBody>
                  {data.schedules.map((row) => (
                    <TableRow key={row.scheduleId}>
                      <TableCell component='th' scope='row'>
                        <Typography variant='inherit' noWrap={true}>
                          {row.name}
                        </Typography>
                      </TableCell>
                      <TableCell align='right'>
                        <Button
                          onClick={handleClick.bind(this, row.scheduleId)}
                        >
                          <DeleteIcon color='error' />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </MUITable>
            </TableContainer>
          </Grid>
        </Grid>
      )}
    </>
  );
}

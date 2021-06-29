import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// MUI
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AddSchedule() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  return (
    <>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item>
          <TextField
            id='name'
            label='Schedule Name'
            variant='outlined'
            color='secondary'
          />
        </Grid>
        <Grid item>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify='space-around'>
              <KeyboardDatePicker
                margin='normal'
                id='date-picker'
                label='Initial Due Date'
                format='MM/dd/yyyy'
                value={selectedDate}
                onChange={handleDateChange}
                color='secondary'
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item>
          <TextField
            id='notes'
            label='Notes'
            variant='outlined'
            color='secondary'
            multiline
            rows={3}
          />
        </Grid>
      </Grid>
    </>
  );
}

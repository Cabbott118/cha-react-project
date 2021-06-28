import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components
import MuiAlert from './MuiAlert';

// MUI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addGrocery } from '../redux/actions/dataActions';
import { returnErrors } from '../redux/actions/errorActions';

const useStyles = makeStyles((theme) => ({
  form: theme.spreadThis.form,
  button: theme.spreadThis.button,
}));

export default function AddData() {
  const UI = useSelector((state) => state.UI);
  useEffect(() => {
    dispatch(returnErrors());
  }, []);

  const classes = useStyles();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    itemName: '',
  });

  const handleInputChange = (event) => {
    event.persist();
    setValues(() => ({
      itemName: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name: values.itemName };
    dispatch(addGrocery(data));
    setValues(() => ({
      itemName: '',
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item>
            <TextField
              label='Name of Item'
              variant='outlined'
              name='itemName'
              value={values.itemName}
              onChange={handleInputChange}
              color='secondary'
            />
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              color='secondary'
              variant='contained'
              type='submit'
              style={{ marginLeft: '10px', height: '56px' }}
              fullWidth
            >
              Add Item
            </Button>
          </Grid>
        </Grid>
        {UI.errors == null ? null : (
          <MuiAlert severity='error' msg={UI.errors.body} />
        )}
      </form>
    </>
  );
}

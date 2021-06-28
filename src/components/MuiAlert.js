import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';

export default function MuiAlert({ msg, severity }) {
  return (
    <>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item>
          <Alert severity={severity}>{msg}</Alert>
        </Grid>
      </Grid>
    </>
  );
}

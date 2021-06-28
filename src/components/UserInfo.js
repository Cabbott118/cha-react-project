import withStyles from '@material-ui/core/styles/withStyles';

// MUI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  ...theme.spreadThis,
  paper: {
    padding: '30px',
  },
});

const UserInfo = (props) => {
  const {
    classes,
    user: { firstName, lastName, email, phoneNumber, imageUrl },
  } = props;
  return (
    <>
      <Paper variant='outlined' className={classes.paper}>
        <Grid
          container
          direction='column'
          justify='space-between'
          alignItems='flex-start'
        >
          <Grid item>
            <img
              src={imageUrl}
              alt='User'
              height='175px'
              width='200px'
              style={{ objectFit: 'cover', borderRadius: '5px' }}
            />
          </Grid>
          <Grid item>
            <Typography variant='h6' style={{ textDecoration: 'underline' }}>
              Name
            </Typography>
            <Typography variant='body1'>
              {firstName} {lastName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h6' style={{ textDecoration: 'underline' }}>
              Registered Email
            </Typography>
            <Typography variant='body1'>{email}</Typography>
          </Grid>
          <Grid item>
            <Typography variant='h6' style={{ textDecoration: 'underline' }}>
              Phone Number
            </Typography>
            <Typography variant='body1'>{phoneNumber}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
export default withStyles(styles)(UserInfo);

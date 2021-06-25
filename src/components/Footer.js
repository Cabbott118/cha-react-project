// MUI
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: theme.spreadThis.footer,
  footerTitle: theme.spreadThis.footerTitle,
  copyright: theme.spreadThis.copyright,
  button: theme.spreadThis.button,
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='stretch'
        className={classes.footer}
      >
        <Grid item>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='flex-start'
          >
            <Grid item>
              <Typography variant='subtitle1' className={classes.footerTitle}>
                ABOUT
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body2'>About item</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body2'>About item</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='flex-start'
          >
            <Typography variant='subtitle1' className={classes.footerTitle}>
              RESOURCES
            </Typography>
            <Grid item>
              <Typography variant='body2'>Resources item</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body2'>Resources item</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body2'>Resources item</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='flex-start'
          >
            <Typography variant='subtitle1' className={classes.footerTitle}>
              CONNECT
            </Typography>
            <Grid item>
              <Typography variant='body2'>Connect item</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body2'>Connect item</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <form>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
            >
              <Grid item>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  style={{ paddingTop: '10px' }}
                >
                  Sign up for future updates (Service not hooked up)
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction='row'
              justify='space-around'
              alignItems='center'
            >
              <Grid item>
                <TextField
                  id='emailAddress'
                  label='Email Address'
                  variant='outlined'
                  color='secondary'
                  size='small'
                />
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  color='secondary'
                  className={classes.button}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.copyright}
      >
        <Grid item>
          <Typography variant='overline' color='secondary'>
            &copy; 2021 Caleb Abbott
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

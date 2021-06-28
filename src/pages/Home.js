// Components
import Footer from '../components/Footer';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  homePage: theme.spreadThis.homePage,
  footer: theme.spreadThis.footer,
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.homePage}>
        <Grid
          container
          container
          direction='column'
          justify='center'
          alignItems='center'
        >
          <Grid item>
            <Typography variant='h6' align='center'>
              Home Page
            </Typography>
            <Typography variant='body1' align='center' color='secondary'>
              To create an account, click 'Login' in the navigation bar, then
              follow the link to sign up
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}

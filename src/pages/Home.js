// Components
import Footer from '../components/Footer';
import CreateEntry from '../components/CreateEntry';
// import AddSchedule from '../components/AddSchedule';

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
            {/* <AddSchedule /> */}
            <CreateEntry />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}

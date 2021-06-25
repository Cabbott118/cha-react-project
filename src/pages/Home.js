// Components
import Footer from '../components/Footer';

// MUI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  homePage: theme.spreadThis.homePage,
  footer: theme.spreadThis.footer,
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.homePage}></div>
      <Footer />
    </>
  );
}

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// MUI
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import Home from '@material-ui/icons/Home';

// Components
import Drawer from './Drawer';
import HideOnScroll from './HideOnScroll';

const useStyles = makeStyles((theme) => ({
  navDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  linkText: {
    textDecoration: 'none',
    textTransform: 'none',
    color: theme.palette.primary.contrastText,
  },
}));

export default function Nav() {
  const classes = useStyles();
  const navLinks = [
    { title: 'Home', path: '/' },
    {
      title: 'Grocery List',
      path: '/grocery-list',
    },
  ];

  return (
    <>
      <HideOnScroll>
        <AppBar position='fixed' color='default' style={{ boxShadow: 'none' }}>
          <Toolbar id='back-to-top-anchor'>
            <Container maxWidth='md' className={classes.navDisplayFlex}>
              <Link to={'/'}>
                <IconButton
                  edge='start'
                  color='primary'
                  aria-label='home'
                  style={{ paddingTop: '16px' }}
                >
                  <Home color='primary' className={classes.linkText} />
                </IconButton>
              </Link>
              <Hidden smDown>
                <List
                  component='nav'
                  aria-labelledby='main navigation'
                  className={classes.navDisplayFlex}
                >
                  {navLinks.map(({ title, path }) => (
                    <Link to={path} key={title} className={classes.linkText}>
                      <ListItem button>
                        <ListItemText primary={title} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Hidden>
              <Hidden mdUp>
                <Drawer navLinks={navLinks} />
              </Hidden>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
}

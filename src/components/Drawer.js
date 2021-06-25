import { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// MUI
// IconButton has been declared in 'Nav'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import MuiDrawer from '@material-ui/core/Drawer';

const useStyles = makeStyles((theme) => ({
  list: {
    // Remove below comments and change all occurances
    // of 'top' to 'right'
    // width: 250,
    // height: '100vh',
    background: '#f7f9fb',
  },
  linkText: {
    textDecoration: 'none',
    textTransform: 'none',
    color: theme.palette.primary.contrastText,
  },
  icon: {
    color: theme.palette.primary.contrastText,
  },
}));

const Drawer = ({ navLinks }) => {
  const classes = useStyles();
  const [state, setState] = useState({ top: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ [anchor]: open });
  };

  const sideDrawerList = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component='nav'>
        {navLinks.map(({ title, path }) => (
          <Link to={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        edge='start'
        aria-label='menu'
        onClick={toggleDrawer('top', true)}
      >
        <Menu color='primary' className={classes.icon} />
      </IconButton>
      <MuiDrawer
        anchor='top'
        open={state.top}
        onClose={toggleDrawer('top', false)}
      >
        {sideDrawerList('top')}
      </MuiDrawer>
    </>
  );
};

export default Drawer;

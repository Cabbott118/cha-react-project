import { useEffect } from 'react';

// Components
import LoadingSpinner from '../components/LoadingSpinner';
import UserInfo from '../components/UserInfo';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, getUserData } from '../redux/actions/userActions';

const useStyles = makeStyles((theme) => ({
  accountPage: theme.spreadThis.accountPage,
  button: theme.spreadThis.button,
}));

export default function Account() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUserData());
  }, []);
  console.log(data);

  const { loading, userCredentials } = data;

  let userMarkUp = loading ? (
    <LoadingSpinner loading={loading} />
  ) : !userCredentials ? (
    <LoadingSpinner loading={userCredentials} />
  ) : (
    <UserInfo user={userCredentials} />
  );

  const handleClick = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.accountPage}
      >
        <Grid item>{userMarkUp}</Grid>
        <Grid item>
          <Button
            className={classes.button}
            variant='contained'
            color='secondary'
            onClick={handleClick}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Components
import AddData from '../components/AddData';
import Table from '../components/Table';

const useStyles = makeStyles((theme) => ({
  groceryListPage: theme.spreadThis.groceryListPage,
  grid: theme.spreadThis.grid,
  gridItem: theme.spreadThis.gridItem,
}));

export default function GroceryList() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.groceryListPage}>
        <Grid
          container
          direction='column'
          justify='space-between'
          alignItems='stretch'
          className={classes.grid}
        >
          <Grid item className={classes.gridItem}>
            <AddData />
          </Grid>
          <Grid item className={classes.gridItem}>
            <Table />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

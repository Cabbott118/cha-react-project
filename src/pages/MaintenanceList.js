// MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Components
import DataTable from '../components/DataTable';

const useStyles = makeStyles((theme) => ({
  maintenanceListPage: theme.spreadThis.maintenanceListPage,
  grid: theme.spreadThis.grid,
  gridItem: theme.spreadThis.gridItem,
}));

export default function MaintenanceList() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.maintenanceListPage}>
        <Grid
          container
          direction='column'
          justify='space-between'
          alignItems='stretch'
          className={classes.grid}
        >
          <Grid item className={classes.gridItem}>
            <p>Form to add data</p>
          </Grid>
          <Grid item className={classes.gridItem}>
            <DataTable />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

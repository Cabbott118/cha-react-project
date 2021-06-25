// MUI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  groceryListPage: theme.spreadThis.groceryListPage,
}));

export default function GroceryList() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.groceryListPage}></div>
    </>
  );
}

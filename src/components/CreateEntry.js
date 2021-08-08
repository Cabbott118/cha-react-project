import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// MUI
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Typography from '@material-ui/core/Typography';

const selections = [
  { title: 'Grocery', icon: 'AddShoppingCartIcon' },
  { title: 'Schedule', icon: 'AccessTimeIcon' },
];
const useStyles = makeStyles((theme) => ({
  button: theme.spreadThis.button,
}));

function CreateEntry(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      open={open}
    >
      <DialogTitle id='simple-dialog-title'>Set Up</DialogTitle>
      <List>
        {selections.map((selection) => (
          <ListItem
            button
            onClick={() => handleListItemClick(selection.title)}
            key={selection.title}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                {selection.icon === 'AddShoppingCartIcon' ? (
                  <AddShoppingCartIcon />
                ) : (
                  <AccessTimeIcon />
                )}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={selection.title} />
          </ListItem>
        ))}
      </List>
      <Button className={classes.button} variant='outlined' color='secondary'>
        Submit
      </Button>
    </Dialog>
  );
}

CreateEntry.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function CreateEntryDialog() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant='subtitle1'>Selected: {selectedValue}</Typography>
      <br />
      <Button
        className={classes.button}
        variant='outlined'
        color='secondary'
        onClick={handleClickOpen}
      >
        Create Something
      </Button>
      <CreateEntry
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { makeStyles } from '@material-ui/core/styles';

import Search from './AppDialog_Search.js'
import '../App.css';

const useStyles = makeStyles =>({
  root: {
    padding: '2px 4px',
    display: 'relative',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
  dialogPaper:{
    minHeight: '80vh',
    maxHeight: '80vh',
  }
});

function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Fab color="secondary" onClick={handleClickOpen}>
        <AddIcon/>
      </Fab>
      <Dialog
        open={open} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">Add</DialogTitle>
        <DialogContent >
          <Search/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;

//https://material-ui.com/components/dialogs/
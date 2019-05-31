import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from './utils';

const styles = theme => ({
  root: {
  },
  title: {
    margin: `${theme.spacing.unit * 15}px 0 ${theme.spacing.unit * 3}px 0`,
  },
});

function generate(list) {
  return list.map((value, index) => {
    return (
      <ListItem id ={index}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={value}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  });
}

class InteractiveList extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;

    return (
     <div className={classes.root}>
          <Grid>
            <Typography variant="h5" className={classes.title}>
              Time Table
            </Typography>
            <div className={classes.demo}>
              <List>
                {generate(this.props.list)}
               </List>
             </div>
         </Grid>
       </div>
     );
   }
}

InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InteractiveList);
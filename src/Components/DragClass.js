import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from './utils';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
  },
  title: {
    margin: `${theme.spacing.unit * 15}px 0 ${theme.spacing.unit * 3}px0`,
  },
});

class DragClass extends Component {
  constructor() {
    super();
    this.state = {
      items: generateItems(50, (index) => {
        return {
          id: index,
          data: 'Draggable' + index
        };
      })
    };
  }
  render() {
    return (
      <div>
        <Grid>
        <Typography variant="h5">
              Time Table
        </Typography>
          <div className="simple-page">
            <Container dragClass="opacity-ghost" dropClass="opacity-ghost-drop" onDrop={e => this.setState({ items: applyDrag(this.state.items, e) })}>
              {this.state.items.map(p => {
                return (
                  <Draggable key={p.id}>
                    <div className="draggable-item">
                      {p.data}
                    </div>
                  </Draggable>
                );
              })}
            </Container>
          </div>
        </Grid>
      </div>
    );
  }
}

export default DragClass;
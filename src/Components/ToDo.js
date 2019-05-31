import React, { Component } from 'react';

class ToDo extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [
        {id:1, name:"食材を買いに行く"},
        {id:2, name:"チャーハンを調理する"},
        {id:3, name:"チャーハンを盛り付ける"}
      ]
    };
  }
  render() {
    let list = this.state.todo.map( item =>
                 <li key={item.id}>{item.name}</li>
               );

    return(
      <ul class="todolist">
        {list}
      </ul>
    );
  }
}

export default ToDo;
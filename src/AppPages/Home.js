import React, { Component } from 'react';
import '../App.css';

import AppMenu from '../AppContainers/AppMenu.js';
import AppList from '../AppContainers/AppList.js';
import AppDialog from '../AppContainers/AppDialog.js';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag_addmodal: false,
      target_modal: "no",
      list: ["1", "2", "3", "4", "5", "6"],
    }
  }
  handleFlagAddmodal(target){
    this.setState({
      flag_addmodal: !(this.state.flag_addmodal),
      modal_target: target,
    })
  }

  addList(s){
    let cp_list = this.state.list.slice()
    cp_list.push(s);
    this.setState({
      list: cp_list,
    });
  }


  render() {
    return (
      <div className="Home">
        <AppMenu/>
        <AppList list={this.state.list}/>
        <AppDialog addList={(s) => {this.addList(s)}}/>
      </div>
    );
  }
}

export default Home;
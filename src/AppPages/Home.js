import React, { Component } from 'react';
import '../App.css';

import AppMenu from '../AppContainers/AppMenu.js';
import AppList from '../AppContainers/AppList.js';
import AppDialog from '../AppContainers/AppDialog.js';
import AppAddButton from '../AppContainers/AppAddButton.js'
import AppDrag from '../AppContainers/AppDrag.js'

import Paper from '@material-ui/core/Paper';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag_addmodal: false,
      target_modal: "no",
    }
  }
  handleFlagAddmodal(target){
    this.setState({
      flag_addmodal: !(this.state.flag_addmodal),
      modal_target: target,
    })
  }

  render() {
    return (
      <div className="Home">
        <AppMenu/>
        <AppList/>
        <AppDialog/>
      </div>
    );
  }
}

export default Home;
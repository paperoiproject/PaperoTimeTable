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
    let cp_list = this.state.list.slice() //配列をcp_listにコピー
    cp_list.push(s); //cp_listにsを追加
    this.setState({ //cp_listをlistに上書き
      list: cp_list,
    });
  }

  deleteList(s){
    let cp_list = this.state.list.slice() //配列をcp_listにコピー
    cp_list.splice(s,1) //引数のリストを一つ消す
    this.setState({ //cp_listをlistに上書き
      list: cp_list,
    })
  }

  render() {
    return (
      <div className="Home">
        <AppMenu/>
        
        <AppList 
          list={this.state.list} 
          deleteList={(s) => {this.deleteList(s)}}
        />

        <AppDialog 
          addList={(s) => {this.addList(s)}}
        />
      </div>

    );
  }
}

export default Home;
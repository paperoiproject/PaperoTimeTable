import React from 'react';

import Dialog from '../Components/AppDialog_Dialog.js';

class AppDialog extends Comment{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="">
                <Dialog addList={(s) => {this.props.addList(s)}}/>
            </div>
        );
    }
}

export default Dialog;
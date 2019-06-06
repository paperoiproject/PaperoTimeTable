import React from 'react';

import Dialog from '../Components/Dialog_AppDialog.js';

class AppDialog extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Dialog addList={(s) => {this.props.addList(s)}}/>
            </div>
        );
    }
}

export default AppDialog;
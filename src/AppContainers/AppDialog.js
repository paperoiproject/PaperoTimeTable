import React from 'react';

import Dialog from '../Components/AppDialog_Dialog.js';

class AppDialog extends Comment{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="">
                <Dialog/>
            </div>
        );
    }
}

export default Dialog;
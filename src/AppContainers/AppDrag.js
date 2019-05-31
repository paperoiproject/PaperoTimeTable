import React from 'react';
import Drag from '../Components/DragClass.js';

import Typography from '@material-ui/core/Typography';

class AppDrag extends Comment{
    constructor(props){
        super(props);
    }
    render(){
        
        return (
            <div className="">
                <Drag/>
            </div>
        );
    }
}

export default Drag;
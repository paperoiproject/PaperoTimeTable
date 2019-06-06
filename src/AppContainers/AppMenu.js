import React from 'react';

import Menu from '../Components/Menu_AppMenu.js';

class AppMenu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Menu/>
            </div>
        );
    }
}

export default AppMenu;
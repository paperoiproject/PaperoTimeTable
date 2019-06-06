import React from 'react';

import Menu from '../Components/Menu.js';

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
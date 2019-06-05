import React from 'react';

import Menu from '../Components/Menu_AppMenu.js';

class AppTab extends Comment{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="">
                <Menu />
            </div>
        );
    }
}

export default Menu;
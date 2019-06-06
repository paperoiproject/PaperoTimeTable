import React from 'react';

import List from '../Components/List_AppList.js';

class AppList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <List list={this.props.list}/>
            </div>
        );
    }
}

export default AppList;
import React from 'react';

import List from '../Components/AppList_List';

class AppList extends Comment{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="">
                <List list={this.props.list}/>
            </div>
        );
    }
}

export default List;
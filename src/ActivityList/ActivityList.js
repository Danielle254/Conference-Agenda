import React from 'react';
import Activity from '../Activity/Activity';
/* import './ActivityList.css'; */



function ActivityList(props) {
    /* const listToDisplay = props.list.map() */

    const listToDisplay = ["test"];
        
      
    
    return (
        <div>
        <h2>Available Camp Activities</h2> 
        {listToDisplay}
        </div>
    )
};

export default ActivityList;

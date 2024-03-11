import React from 'react';
import Activity from '../Activity/Activity';
import './ActivityList.css'





function ActivityList(props) {
    const listToDisplay = props.list
    
    const addActivity = (activityIdToAdd) => {     
        setActivityList((activityList) => 
        activityList.filter((activity) => activity.id )
        )
      };
    
    const CurrentActivitiesList = activityList.filter((activity) => (activity.isAdded==false)).map((activity) =>
          
    (
        <div className={styles.li}>
        <button type="button" className={styles.add} onClick={addActivity} >+</button>
        <li><Activity name={activity.name} location={activity.location} time={activity.time} /></li>
        
        </div>
    )
        
            );
    
    return (
        <div>
        <h2>Available Camp Activities</h2> 
        <ul>
            {CurrentActivitiesList}
        </ul>
        </div>
    )
};

export default ActivityList;

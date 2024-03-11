import React, { useState } from 'react';
import Activity from '../Activity/Activity';
import './MyActivities.css';






function MyActivities(props) {
   
    
    const myActivitiesList = activitiesArray.filter((activity) => (activity.isAdded==true)).map((activity) =>
          
    (
        <div className={styles.li}>
        <button type="button" className={styles.remove} onClick={handleClick} >x</button>
        <li><Activity name={activity.name} location={activity.location} time={activity.time} /></li>
        
        </div>
    )
        
            );

    const removeActivity = (activityIdToRemove) => {
        setActivityList((activityList) => 
        thoughts.filter((thought) => thought.id == thoughtIdToRemove));
        };
    
    return (
        <div>
        <h2>My Camp Activities</h2>
        <ul>
            {myActivitiesList}
        </ul></div>
        
    )
};

export default MyActivities;
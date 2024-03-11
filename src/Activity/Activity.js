import React from 'react';
import './Activity.css';


function Activity(props) {
    return (
        <div >
            <h3  className={styles.activityStyle}>{props.name}</h3>
            <p  className={styles.activityStyle}>{props.location}</p>
            <p  className={styles.activityStyle}>{props.time}</p>
        </div>
    )
};

export default Activity;
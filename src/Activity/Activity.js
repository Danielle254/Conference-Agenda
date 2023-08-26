import React, { useState } from 'react';
import styles from '../CSSModules/Activity.module.css';


function Activity(props) {
    return (
        <div>
            <h3  className={styles.activityStyle}>{props.name}</h3>
            <p  className={styles.activityStyle}>{props.location}</p>
            <p  className={styles.activityStyle}>{props.time}</p>
        </div>
    )
};

export default Activity;
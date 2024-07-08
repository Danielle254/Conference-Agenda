import React from 'react';
import './ConferenceAgenda.css';
import ActivityList from '../ActivityList/ActivityList.js';


export default function ConferenceAgenda(props) {

    return (
        <div>
            <h2>Conference Agenda</h2>
            <ActivityList 
            listType="agenda"
            agenda={props.agenda}
            addToList={props.addToList}
            />
        </div>
    )
}



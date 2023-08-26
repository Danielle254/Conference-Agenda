import React, { useState } from 'react';



function Activity(props) {
    return (
        <div>
        <h3>{props.name}</h3>
        <p>{props.location}</p>
        <p>{props.time}</p>
        </div>
    )
};

export default Activity;
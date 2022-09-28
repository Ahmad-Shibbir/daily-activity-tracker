import React from 'react';
import './ActivityCard.css'

const ActivityCard = (props) => {
    const {id}=props.activity;
    return (
        <div>
            <h1>inside card</h1>
            <p>id = {id}</p>
        </div>
    );
};

export default ActivityCard;
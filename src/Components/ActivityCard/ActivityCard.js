import React from 'react';
import './ActivityCard.css'

const ActivityCard = (props) => {
    const {id, name, img, time}=props.activity;
    return (
        <div className='card' >
            <div>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <h4>Time spent: {time}</h4>
                <button >Add to list</button>
            </div>
            
        </div>
    );
};

export default ActivityCard;
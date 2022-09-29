import React from 'react';
import './ActivityCard.css'

const ActivityCard = ({addTime, activity}) => {
    const {id, name, img, time}=activity;
    
    return (
        <div className='card' >
            <div>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>Time spent: {time} hr</h4>
                <button className='btn' onClick={()=>addTime(activity)} >Add to list</button>
            </div>
            
        </div>
    );
};

export default ActivityCard;
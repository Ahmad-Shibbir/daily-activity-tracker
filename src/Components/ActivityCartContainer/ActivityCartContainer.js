import React, { useEffect, useState } from 'react';
import ActivityCard from '../ActivityCard/ActivityCard';
import './ActivityCartContainer.css'

const ActivityCartContainer = () => {
    const [activities, setActivities]= useState([]);

    useEffect(()=>{
        fetch('activity-db.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[])

    return (
        <div className='Container-background'>
            <h2>Activity list</h2>
            <div className='card-container'>
            {
                activities.map(activity=> <ActivityCard 
                    key={activity.id} 
                    activity={activity}>
                    </ActivityCard>)
            }
            </div>
           
            
        </div>
    );
};

export default ActivityCartContainer;
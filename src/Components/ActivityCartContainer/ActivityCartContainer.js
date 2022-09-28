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
        <div>
            <h1>My Daily Activity </h1>
            {
                activities.map(activity=> <ActivityCard 
                    key={activity.id} 
                    activity={activity}>
                    </ActivityCard>)
            }
            
        </div>
    );
};

export default ActivityCartContainer;
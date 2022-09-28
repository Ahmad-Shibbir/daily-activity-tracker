import React, { useEffect, useState } from 'react';
import ActivityCard from '../ActivityCard/ActivityCard';
import Sidebar from '../Sidebar/Sidebar';
import './ActivityCartContainer.css'

const ActivityCartContainer = () => {
    const [activities, setActivities]= useState([]);
    const [activityTime, setActivityTime]=useState([])

    useEffect(()=>{
        fetch('activity-db.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[]);

    const addTime =(time)=>{
        console.log(time)
        const newTime = [...activityTime, time];
        setActivityTime(newTime);

    };
    
    return (
        
        <div className='main-container'>
        <div className='Container-background'>
                <h2>Activity list {activityTime}</h2>
                <div className='card-container'>
                {
                    activities.map(activity=> <ActivityCard 
                        key={activity.id} 
                        activity={activity}
                        addTime={addTime}>
                        </ActivityCard>)
                }
                </div>
        </div>
        <div>
                <Sidebar activityTime={activityTime}></Sidebar>
        </div>
        </div>
    );
};

export default ActivityCartContainer;
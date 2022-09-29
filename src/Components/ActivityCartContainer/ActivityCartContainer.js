import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
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
            <div className='iconAndTitle'>
            <FontAwesomeIcon className='icon' icon={faStopwatch}></FontAwesomeIcon>
                <h1>Daily Activity Tracker</h1>
            </div>
                <br />
                <h2>Select Today's Tasks</h2>
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
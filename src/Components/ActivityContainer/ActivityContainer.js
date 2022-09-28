import React from 'react';
import ActivityCartContainer from '../ActivityCartContainer/ActivityCartContainer';
import Sidebar from '../Sidebar/Sidebar';
import './ActivityContainer.css';

const ActivityContainer = () => {
    return (
        <div className='Activity-container'>
            <ActivityCartContainer></ActivityCartContainer>
            <Sidebar></Sidebar>
        </div>
    );
};

export default ActivityContainer;
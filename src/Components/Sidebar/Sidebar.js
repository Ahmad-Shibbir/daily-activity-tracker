import React from 'react';
import './Sidebar.css'
const Sidebar = (props) => {
    const {activityTime}=props;
    let totalTime = 0;
   for(const time of activityTime)
    totalTime = totalTime+ time.activityTime;
    
    return (
        <div className='sidbar'>
            <div className="user-info-container">
                <div className='user-info'>
                    <img className='user-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTov701drDtzW5INfDz5_NdUhhxUVDv44LrXw&usqp=CAU" alt="" />
                    <h3>Nayem Khan</h3>
                    <p>chitagong</p>
                    
                </div>
       
                <div className='extra-info-container'>
                    <div className='extra-info'>
                        <h4>Batch-6</h4>
                        <p>Programming Hero</p>
                    </div>
                    <div>
                        <h4>Batch-182</h4>
                        <p>IIUM</p>
                    </div>
                    
                    
                </div>
            </div>

           <div>
           <div>
                    <h3>Add A Break Time</h3>
                </div>

                <div className="break-btn-box">
                    <button className="break-btn" >20mnt</button>
                    <button className="break-btn" >20mnt</button>
                    <button className="break-btn" >20mnt</button>
                    <button className="break-btn" >20mnt</button>
                </div>
           </div>

            <div className="activity-details">
                <h3>Activity Details</h3>
                <div className='activity-time'>
                    <h3>Activity Time</h3>
                    <p>{totalTime}hr</p>
                </div>

                <div className="break-time">
                    <h3>Activity Time</h3>
                    <p>200hr</p>
                </div>
            </div>

            <div>
                <button className='btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Sidebar;
import React from 'react';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div>
            <div className="user-info">
                <div>
                    <img className='user-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTov701drDtzW5INfDz5_NdUhhxUVDv44LrXw&usqp=CAU" alt="" />
                    <div>
                        <h3>Nayem Khan</h3>
                        <p>chitagong</p>
                    </div>
                </div>

                <div>
                    <h3>Add A Break Time</h3>
                </div>

                <div className="break-btn-box">
                    <button className="break-btn" >20mnt</button>
                    <button className="break-btn" >20mnt</button>
                    <button className="break-btn" >20mnt</button>
                    <button className="break-btn" >20mnt</button>
                </div>
            <div>
             <div>
                
            </div>   
            </div>
                <div className='body-info-container'>
                    <div className='body-info'>
                        <h4>80kg</h4>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h4>80kg</h4>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h4>80kg</h4>
                        <p>Weight</p>
                    </div>
                    
                </div>
               
                
            </div>

            <div>
                
            </div>
            <div className="activity-details">
                <h3>Exercise Details</h3>
                <div className='activity-time'>
                    <h3>Activity Time</h3>
                    <p>200hr</p>
                </div>

                <div className="break-time">
                    <h3>Activity Time</h3>
                    <p>200hr</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
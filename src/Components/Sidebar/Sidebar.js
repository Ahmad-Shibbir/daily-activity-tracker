import React, { useState } from 'react';
import './Sidebar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = (props) => {
    const {activityTime}=props;
    let totalTime = 0;
    //console.log(activityTime);
   for(const time of activityTime){
    totalTime = totalTime + time.time;
   }
   
   const [breakT, setBreak] = useState(0)

   let newBreakTime= 0;
   const breakTimeHandeler = (time) => {
        newBreakTime = newBreakTime + time
        setBreak(newBreakTime);
        newBreakTime = 0;
   }


    const notify = () => toast("Wow Your Activities are Completed!");
    
    return (
        <div className='sidbar'>
            <div className="user-info-container">
                <div className='user-info'>
                    <img className='user-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTov701drDtzW5INfDz5_NdUhhxUVDv44LrXw&usqp=CAU" alt="" />
                    <h3>Ahmad Shibbir</h3>
                    <p>Narsingdi</p>
                    
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
                    <button onClick={()=>breakTimeHandeler(15)} className="break-btn" >15mnt</button>
                    <button onClick={()=>breakTimeHandeler(30)}  className="break-btn" >30mnt</button>
                    <button onClick={()=>breakTimeHandeler(45)}  className="break-btn" >45mnt</button>
                    <button onClick={()=>breakTimeHandeler(60)}  className="break-btn" >60mnt</button>
                </div>
           </div>

            <div className="activity-details">
                <h3>Activity Details</h3>
                <div className='activity-time'>
                    <h3>Activity Time</h3>
                    <p>{totalTime} <small>hr</small></p>
                </div>

                <div className="break-time">
                    <h3>Activity Time</h3>
                    <p>{breakT}<small>min</small></p>
                </div>
            </div>

            <div>
                <button className='btn' onClick={notify}>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Sidebar;
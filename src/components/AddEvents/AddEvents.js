import React, { useState } from 'react';
import './AddEvents.css'

const AddEvents = () => {
    const [event, setEvent] =useState({title:"", description:"", date: new Date()})
    
    
    const handleEvent =(e)=>{
        const newEvent = {...event};
        if (e.target.name === 'title') {
            newEvent.title= e.target.value;
        }
        if (e.target.name === 'description') {
            newEvent.description= e.target.value;
        }
        if (e.target.name === 'date') {
            newEvent.date= e.target.value;
        }
        setEvent(newEvent);
        console.log(newEvent);
    }
    const handleAddEvent =(e)=>{
        e.preventDefault();
        const newEvent = {
            ...event
        };
        fetch('https://warm-badlands-90781.herokuapp.com/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
        })
        
    }
    
    return (
        <div className="add-events-container">
            <div className="add-event-topbar">
                <h4>Add Event</h4>
            </div>
            <div className="add-events-card">
                <form action="">
                <div className="form-group">
                    <label htmlFor="">Event Title</label>
                    <input type="text" name="title" id="" placeholder="Enter Title" onChange={handleEvent} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input type="text" name="description" id="" placeholder="Description" onChange={handleEvent}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Event Date</label>
                    <input type="date" name="date" id="" onChange={handleEvent}/>
                </div>

                <button onClick={handleAddEvent} className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddEvents;
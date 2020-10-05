import React from 'react';
import './AddEvents.css'

const AddEvents = () => {
    return (
        <div className="add-events-container">
            <div className="add-event-topbar">
                <h4>Add Event</h4>
            </div>
            <div className="add-events-card">
                <form action="">
                <div className="form-group">
                    <label htmlFor="">Event Title</label>
                    <input type="text" name="" id="" placeholder="Enter Title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input type="text" name="" id="" placeholder="Description"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Event Date</label>
                    <input type="date" name="" id="" placeholder="Description"/>
                </div>

                <button className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddEvents;
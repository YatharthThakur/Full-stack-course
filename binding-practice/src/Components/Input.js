import React from 'react';
import { useState } from 'react';
import Display from './Display';

export default function Input() {
    // get updated input
    let [title,setTitle] = useState("");
    const handleTitle = (event) => {
        setTitle(event.target.value);
    } 

    // store updated input
    let [updatedTitle, setUpdate] = useState({utitle: ""});
    const handleChange = event => {
        event.preventDefault();
        setUpdate({utitle: title});
    }
    return (
    <div>
        <div>
            <form onSubmit={handleChange}>
                <input 
                    type="text" 
                    placeholder='Enter text' 
                    onChange={handleTitle}
                    value={title}></input>
                <button>Update</button>
            </form>
        </div>
        <div>
            {/* pass the stored input to display */}
            <Display {...updatedTitle}/>
        </div>
    </div>
  )
}

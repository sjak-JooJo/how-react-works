import React, { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }

    return (
        <div style={{border:'2px solid purple', margin:'20px'}}>
            <h2>This is my smart Watch</h2>
            <h3>My current Steps: {steps} </h3>
            <button onClick={increaseSteps}>De Dour....</button>
            <Display name="Garmin" steps={steps}></Display>
        </div>
    );
};

export default Watch;
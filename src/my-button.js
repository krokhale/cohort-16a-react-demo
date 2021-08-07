// Installing nvm/nodejs on your system
// Using create react app to create a basic react application
// Understanding how a react application boots up
// Understand a single component and how it works including useState and useEffect
// Understanding how a parent component passes information to the child component
// Understanding how the child passes information to the parent.

import React, {useState, useEffect} from 'react';

function MyButton(props) {
    console.log('the props received from the parent component are: ', props)
    console.log(props.buttonText)
    console.log(props.color)

    const setClasses = () => {
        // 'py-3 px-4 bg-red-500 rounded text-white'
        let baseClasses = 'py-3 px-4 text-white'
        if(props.color=='red'){
            baseClasses = baseClasses + ' bg-red-500'
        } else {
            baseClasses = baseClasses + ' bg-blue-500'
        }

        if(props.rounded){
            baseClasses = baseClasses + ' rounded'
        }

        console.log(baseClasses)
        return baseClasses

    };

    return (
        <>
            {/*ternary operator*/}
            <button onClick={() => props.myFunc(45)} className={setClasses()}>{props.buttonText || 'Submit'}</button>
        </>
    );
}

export default MyButton;

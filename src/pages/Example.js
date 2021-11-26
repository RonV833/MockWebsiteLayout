//import { ToggleButton } from '@mui/material';
import React, {useState, useEffect} from 'react'



const Example = () => {
    //count initialized to zero, setCount will update the count argument, call setCount function in line 11 will add 1 to count variable
    const [count, setCount] = useState(0);
    const [userName, setUsername] = useState('Hi This is Ron');
    const [timer, setTimer] = useState(0);
    const [isActive, setisActive] = useState(false);
    //ToggleButton =() => {
     //   setisActive(!isActive);
    //}
    function ToggleButton () {
        setisActive(!isActive);
    }
    function reset () {
        setisActive(false) ;
        setTimer(0);
    }
    useEffect(()=>{
        let interval = 0;
        if (isActive ) {
            interval = setInterval(()=>setTimer(timer=>timer+1),1000); //setinterval
        }
        else if (!isActive && timer!=0) {
            clearInterval(interval); //will reset to zero
        }
        return ()=>clearInterval(interval);
    }, [isActive, timer]);
     return (
        <>
            <h2>{userName} </h2>
            <input type="text" value={userName} onChange={(event)=>setUsername(event.target.value)}></input>

            <p>You click {count} times</p>
            <button onClick={()=>setCount(count+1)}>
                    Click Me
            </button>

            <div >
                <p >This is the Timer</p>
                {timer}{<br/>}
                <button onClick={ToggleButton} >{!isActive?'Start':'Pause'}</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
}

export default Example

import React, { useState, useEffect } from 'react'

function CountDown(props){
    
  const [count, setCount] = useState(4);
  const [timerOn, setTimerOn] = useState(false);

  let interval = null

  useEffect(() => {
    if(timerOn && count > 0) {
        interval = setInterval(() => {
        setCount(count => count - 1);
      }, 1000);
    }
    else {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval);
    }
  }, [count, timerOn]);

  const turnOn = () => {
    setTimerOn(true)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => turnOn()}>
        Click 
      </button>
    </div>
  );
}

export default CountDown;
import React, { useState } from 'react';

function Counter({totalNum, onClick}) {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>
                count: {count}<span> totalNum: {totalNum}</span>
            </p>
            <button onClick={()=>{
                setCount((prev)=>prev+1)
                onClick();
            }}>클릭</button>
        </div>
    );
}

export default Counter;
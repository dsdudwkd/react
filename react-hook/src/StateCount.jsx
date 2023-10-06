import React, { useState } from 'react';
import Counter from './component/Counter';

function StateCount(props) {

    const [count, setCount] = useState(0);
    const btnEvent = () => {setCount((prev)=>prev+1)}

    return (
        <div>
            totalNum : {count}{count > 10 ? '업' : '다운'}
            <Counter totalNum={count} onClick={btnEvent} /> 
        </div>
    );
}

export default StateCount;
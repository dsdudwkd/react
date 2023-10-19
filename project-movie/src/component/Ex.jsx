import React, { useEffect, useState } from 'react';

function Ex(props) {
    const [num, setNum] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('안녕하세요00')
    },[count])
    return (
        <div>
            <p>{num}</p>
            <p>{count}</p>

            <button onClick ={()=>setNum(num+1)}>dd</button>
            <button onClick ={()=>setCount(count+1)}>ff</button>
        </div>
    );
}

export default Ex;
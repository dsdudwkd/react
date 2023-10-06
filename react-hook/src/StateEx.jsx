import React, { useState } from 'react';
/* 
초기값 2로 설정
버튼을 클릭할 때마다 2배수로 곱하도록
*/
function StateEx() {

    const [num, setNum] = useState(2);

    return (
        <div>
            <p>{num}</p>
            <button onClick={()=>{
                setNum(num*2);
            }}>클릭</button>
        </div>
    );
}

export default StateEx;
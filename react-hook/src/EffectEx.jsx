import React, { useEffect, useState } from 'react';
/* 
useEffect와 useState를 사용해서 카운트 다운 만들기

1.useState에 초기 시간을 설정하고 useEffect로 시간을 차감해서 0이 되면 멈추도록 설정
(setInterval을 이용해서)

2. 0초가 되면 캍운트가 멈추도록 설정
*/
function EffectEx(props) {

    const [time, setTime] = useState(10);

    useEffect(()=>{
        const countDown = () => {
            if(time > 0){
                setTime(time-1);
            } 
        }

        const timer = setInterval(countDown,1000);

        return () => {
            clearInterval(timer);
        }
       
    },[time])

    return (
        <div>
            <span>{time}</span>
        </div>
    );
}

export default EffectEx;
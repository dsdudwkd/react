import React, { useEffect, useRef, useState } from 'react';
import img from '../game.png';

/* 
가위 바위 보 게임

조건은 내 점수와 pc의 점수를 비교해서 
1. 두 숫자의 차이가 0이면 무승부
2. 두 숫자의 차이가 -1과 2가 나오면 사람이 승리
사람 : 컴퓨터
가위 : 보 => 1 - (-1) = 2
바위 : 가위 => 0 - 1 = -1
보 : 바위 => -1 - 0 = -1
3. 그 외의 숫자는 컴퓨터가 이긴 것
*/


function UseRef2(props) {

    const settings = {
        가위: 1,
        바위: 0,
        보: -1
    };
    
    const handPosition = {
        바위 : '-50px',
        가위 : '-450px',
        보 : '-800px'
    };

    const [result, setResult] = useState(''); //결과값(승리, 패배, 무승부)
    const [score, setScore] = useState(0); //기본 점수
    const interval = useRef(); //setInterval의 관리
    const [imgPo, setImgPo] = useState(handPosition.바위);//handPosition에서 기본 위치 설정

    useEffect(()=>{
        interval.current = setInterval(changeHand,100);

        return () => {
            clearInterval(interval.current)
        }
    },[imgPo]);

    //가위바위보의 이미지의 위치가 계속 바뀔 수 있도록 하는 함수, 바위 다음 가위 가위 다음 보 보 다음 바위가 보여지게끔 로테이션
    const changeHand = () => {
        if(imgPo === handPosition.바위) {
            setImgPo(handPosition.가위);
        } else if (imgPo === handPosition.가위){
            setImgPo(handPosition.보);
        } else if(imgPo === handPosition.보){
            setImgPo(handPosition.바위);
        }
    };

    const onClickBtn = (choice) =>() => {
        clearInterval(interval.current);

        const myScore = settings[choice]; //점수를 받아올 수 있게
        const comScore = settings[getPcChoice(imgPo)];
        console.log(myScore);
        console.log(comScore);

        const diff = myScore - comScore;


        if(diff === 0) {
            setResult('무승부입니다');
        } else if([-1,2].includes(diff)){
            setResult('이겼습니다');
            setScore((prev)=> prev + 1);
        }else {
            setResult('졌습니다');
            setScore((prev)=>prev -1);
        }

        setTimeout(()=>{
            interval.current = setInterval(changeHand, 100);
        }, 3000)
    }

    const getPcChoice = (imgPo) => {
        return Object.keys(handPosition).find((key)=>handPosition[key] === imgPo)
    }

    


    return (
        <div>
            <div className='hand' style={{width : '400px', height : '560px', background: `url(${img}) ${imgPo} 0` }}></div>

            <div>
                <button onClick={onClickBtn('가위')}>가위</button>
                <button onClick={onClickBtn('바위')}>바위</button>
                <button onClick={onClickBtn('보')}>보</button>

            </div>
                <div>{result}</div>
                <div>{score}</div>
        </div>
    );
}

export default UseRef2;
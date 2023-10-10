import React, { useContext } from 'react';
import { ThemeContext } from './component/Theme';

function ContextTheme(props) {

    const {theme, toggleTheme} = useContext(ThemeContext);

    const containStyle = {
        backgroundColor : theme === 'light' ? '#ffffff' : '#333333',
        color : theme === 'light' ? '#333333' : '#ffffff'
    }

    return (
        <div style = {containStyle}>
            <p>다크모드 테스트 중입니다</p>
            <button onClick={toggleTheme}>테마 변경하기</button>
            
        </div>
    );
}

export default ContextTheme;
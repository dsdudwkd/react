import React, { createContext, useState } from 'react';

export const ColorTheme = createContext();

export function DarkMode(props) {

    const [theme, setTheme] = useState(false); //라이트모드나 다크모드 중 기본값으로 할 값
    const toggleMode = () => setTheme((prev) => !prev);
    return (
        <div>
            <ColorTheme.Provider value={{theme, toggleMode}}>
                <button onClick={() => toggleMode()}>다크모드 버튼</button>

                <p>
                    {theme ? (
                    <span style={{backgroundColor : 'black', color : 'white'}}>다크모드 실행</span>) : (<span>라이트모드 실행</span>)
                    }
                </p>
            </ColorTheme.Provider>
        </div>
    );
}


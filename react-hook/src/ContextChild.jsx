import React, { useContext } from 'react';
import {Text} from './Context';

function ContextChild(props) {

    const contextValue = useContext(Text);

    return (
        <div>
            <p>{contextValue}</p>
        </div>
    );
}

export default ContextChild;
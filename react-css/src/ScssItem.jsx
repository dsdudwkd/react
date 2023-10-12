import React from 'react';
import './scss/style.scss';

function ScssItem(props) {
    return (
        <div className='container'>
            <div className='box'></div>
            <div className='box red'></div>
            <div className='box pink'></div>
            <div className='box purple'></div>
        </div>
    );
}

export default ScssItem;
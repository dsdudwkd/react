import React from 'react';
// import './Button.css';
import styles from './Button.module.css';

function Button(props) {
    return (
        <div>
            {/* <button className='button'>버튼</button> */}
            <button className={styles.button}>버튼</button>
        </div>
    );
}

export default Button;
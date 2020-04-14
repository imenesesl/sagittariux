import React from 'react';
import { useConnect } from '../../src';

const LeftContainer = (props) => {
    return (
        <div className='view-container letf-container'>
            {props.store.test.counter}
        </div>
    );
};

export default useConnect(LeftContainer);
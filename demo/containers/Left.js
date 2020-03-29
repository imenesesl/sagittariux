import React from 'react';
import { SagittariuxStateless } from '../../src';

const LeftContainer = (props) => {
    return (
        <div className='view-container letf-container'>
            {props.state.test.counter}
        </div>
    );
};

export default SagittariuxStateless(LeftContainer);
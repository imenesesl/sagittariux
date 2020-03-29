import React from 'react';
import { SagittariuxStatefull } from '../../src';
import { addAction, substractAction } from '../reducers'

const RightContainer = (props) => {
    return (
        <div className='view-container right-container'>
            <button onClick={() => props.dispatch(addAction(1))} >
                ADD
            </button>
            <button onClick={() => props.dispatch(substractAction(1))} >
                SUBSTRACT
            </button>
        </div>
    );
};

export default SagittariuxStatefull(RightContainer);
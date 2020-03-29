
import React, { useReducer } from 'react';
import { testReducer, initialStateTest } from './reducers'
import { SagittariuxBlackHole } from '../src';
import RightContainer from './containers/Right';
import LeftContainer from './containers/Left';
import './style.css';

const App = () => {
    const reducers = {
        test: useReducer(testReducer, initialStateTest)
    };
    return (
        <SagittariuxBlackHole
            reducers={reducers} >
            <div className='principal-container' >
                <LeftContainer />
                <RightContainer />
            </div>
        </ SagittariuxBlackHole>
    );
};

export default App;
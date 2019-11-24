import React from 'react'
import {
    StateContext,
    DispatchContext
} from './state.context'

const SagittariuxState = ({ component: Component, dispatch, state }) => {

    return (
        <DispatchContext.Provider value={dispatch} >
            <StateContext.Provider value={state}>
                <Component />
            </StateContext.Provider>
        </DispatchContext.Provider>
    )

}

export default SagittariuxState
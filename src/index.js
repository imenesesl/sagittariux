import React, { useContext } from 'react'
import useCombinedReducers from './use.combined.reducers'
import { StateContext, DispatchContext } from './state.context'
import SagittariuxState from './sagittariux.state'

const SagittariuxBlackHole = ({ component: Component, reducers }) => {

    const [state, dispatch] = useCombinedReducers(reducers)

    return <SagittariuxState component={Component} state={state} dispatch={dispatch} />
}


const SagittariuxStatefull = ({ component: Component, ...rest }) => {

    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    return <Component state={state} dispatch={dispatch} {...rest} />

}

const SagittariuxStateless = ({ component: Component, ...rest }) => {

    const state = useContext(StateContext);

    return <Component state={state}  {...rest} />

}

export {
    SagittariuxBlackHole,
    SagittariuxStatefull,
    SagittariuxStateless
}

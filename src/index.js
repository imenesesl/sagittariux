import React, { useContext, createContext } from 'react'

// Combined reducers
const useCombinedReducers = combinedReducers => {
    const state = Object.keys(combinedReducers).reduce(
        (acc, key) => ({ ...acc, [key]: combinedReducers[key][0] }), {},
    )

    const dispatch = action =>
        Object.keys(combinedReducers)
            .map(key => combinedReducers[key][1])
            .forEach(fn => fn(action));

    return [state, dispatch]
}


// Context
const StateContext = createContext()
const DispatchContext = createContext()

const SagittariuxState = ({ component: Component, dispatch, state }) => {

    return (
        <DispatchContext.Provider value={dispatch} >
            <StateContext.Provider value={state}>
                <Component />
            </StateContext.Provider>
        </DispatchContext.Provider>
    )

}

// Provider
const SagittariuxBlackHole = ({ component: Component, reducers }) => {

    const [state, dispatch] = useCombinedReducers(reducers)

    return <SagittariuxState component={Component} state={state} dispatch={dispatch} />
}


// State controllers
const SagittariuxStatefull = (Component) => {

    const Wrap = ({ ...rest }) => {

        const stateContext = useContext(StateContext);
        const dispatchContext = useContext(DispatchContext)

        return <Component state={stateContext} dispatch={dispatchContext} {...rest} />
    }

    return class extends React.Component {

        render() {
            return <Wrap {...this.props} />
        }
    }
}


const SagittariuxStateless = (Component) => {

    const Wrap = ({ ...rest }) => {

        const stateContext = useContext(StateContext)

        return <Component state={stateContext} {...rest} />
    }

    return class extends React.Component {

        render() {
            return <Wrap {...this.props} />
        }
    }

}

export {
    SagittariuxBlackHole,
    SagittariuxStatefull,
    SagittariuxStateless
}

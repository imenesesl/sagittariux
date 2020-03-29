import React, { useContext, createContext } from 'react';

const StateContext = createContext();
const DispatchContext = createContext();

const useCombinedReducers = combinedReducers => {
    const state = Object
        .keys(combinedReducers)
        .reduce((acc, key) => ({ ...acc, [key]: combinedReducers[key][0] }), {});
    const dispatch = action =>
        Object
            .keys(combinedReducers)
            .map(key => combinedReducers[key][1])
            .forEach(fn => fn(action));
    return [state, dispatch];
};

const SagittariuxState = ({ children, dispatch, state }) => {
    return (
        <DispatchContext.Provider value={dispatch} >
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
};

const SagittariuxBlackHole = ({ children, reducers }) => {
    const [state, dispatch] = useCombinedReducers(reducers);
    return (
        <SagittariuxState
            state={state}
            dispatch={dispatch} >
            {children}
        </SagittariuxState>
    );
};

const SagittariuxStatefull = (Component) => {
    const Statefull = ({ ...rest }) => {
        const stateContext = useContext(StateContext);
        const dispatchContext = useContext(DispatchContext);
        return (
            <Component
                state={stateContext}
                dispatch={dispatchContext}
                {...rest} />
        );
    };
    return class extends React.Component {
        render() {
            return (
                <Statefull
                    {...this.props} />
            );
        };
    };
};


const SagittariuxStateless = (Component) => {
    const Stateless = ({ ...rest }) => {
        const stateContext = useContext(StateContext);
        return (
            <Component
                state={stateContext}
                {...rest} />
        );
    };
    return class extends React.Component {
        render() {
            return (
                <Stateless
                    {...this.props} />
            );
        };
    };
};

export {
    SagittariuxBlackHole,
    SagittariuxStatefull,
    SagittariuxStateless
}

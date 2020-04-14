import React, { useContext, createContext } from 'react';

const StateContext = createContext();
const DispatchContext = createContext();

const useCombinedReducers = combinedReducers => {
    const store = Object
        .keys(combinedReducers)
        .reduce((acc, key) => ({ ...acc, [key]: combinedReducers[key][0] }), {});
    const dispatch = action =>
        Object
            .keys(combinedReducers)
            .map(key => combinedReducers[key][1])
            .forEach(fn => fn(action));
    return [store, dispatch];
};

const ContextProvider = ({ children, dispatch, store }) => {
    return (
        <DispatchContext.Provider value={dispatch} >
            <StateContext.Provider value={store}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
};

const Provider = ({ children, store }) => {
    const [state, dispatch] = useCombinedReducers(store);
    return (
        <ContextProvider
            store={state}
            dispatch={dispatch} >
            {children}
        </ContextProvider>
    );
};

const useConnect = (Component) => {
    const Connect = ({ ...rest }) => {
        const store = useContext(StateContext);
        const dispatch = useContext(DispatchContext);
        return (
            <Component
                store={store}
                dispatch={dispatch}
                {...rest} />
        );
    };
    return class extends React.Component {
        render() {
            return (
                <Connect
                    {...this.props} />
            );
        };
    };
};

export {
    Provider,
    useConnect,
}

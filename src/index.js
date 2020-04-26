import React, { useContext, createContext } from "react";

const StateContext = createContext();
const StateConsumer = StateContext.Consumer;
const DispatchContext = createContext();
const DispatchConsumer = DispatchContext.Consumer;

const useCombinedReducers = (combinedReducers) => {
  const state = Object.keys(combinedReducers).reduce(
    (acc, key) => ({ ...acc, [key]: combinedReducers[key][0] }),
    {}
  );
  const dispatch = (action) =>
    Object.keys(combinedReducers)
      .map((key) => combinedReducers[key][1])
      .forEach((fn) => fn(action));
  return [state, dispatch];
};

const ContextProvider = ({ children, dispatch, store }) => {
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={store}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

const Provider = ({ children, store }) => {
  const [state, dispatch] = useCombinedReducers(store);
  return (
    <ContextProvider store={state} dispatch={dispatch}>
      {children}
    </ContextProvider>
  );
};

const useConnect = (Component) => {
  const Connect = ({ ...rest }) => {
    return (
      <DispatchConsumer>
        {(dispatch) => (
          <StateConsumer>
            {(store) => (
              <Component store={store} dispatch={dispatch} {...rest} />
            )}
          </StateConsumer>
        )}
      </DispatchConsumer>
    );
  };
  return class extends React.Component {
    render() {
      return <Connect {...this.props} />;
    }
  };
};

export { Provider, useConnect };

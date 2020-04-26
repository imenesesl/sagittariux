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

const Provider = ({ children, store }) => {
  const [state, dispatch] = useCombinedReducers(store);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

const useConnect = (Component) => {
  const Connect = ({ ...rest }) => {
    return (
      <DispatchConsumer>
        {(dispatch) => (
          <StateConsumer>
            {(state) => (
              <Component store={state} dispatch={dispatch} {...rest} />
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

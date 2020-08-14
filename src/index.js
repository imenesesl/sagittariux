import React, { createContext } from "react";

const StateContext = createContext();
const StateConsumer = StateContext.Consumer;
const DispatchContext = createContext();
const DispatchConsumer = DispatchContext.Consumer;

const combineReducers = (combinedReducers) => {
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

const mapToAction = (action) => (fn) => {
  if (typeof fn === "function") {
    return fn(action);
  }
  return () => ({});
};

const Provider = ({ children, store }) => {
  const [state, dispatch] = combineReducers(store);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

const connect = (stateProps = null, dispatchProps = null) => (Component) => {
  const Connect = ({ ...rest }) => (
    <DispatchConsumer>
      {(dispatch) => (
        <StateConsumer>
          {(state) => (
            <Component
              {...rest}
              {...mapToAction(state)(stateProps)}
              {...mapToAction(dispatch)(dispatchProps)}
            />
          )}
        </StateConsumer>
      )}
    </DispatchConsumer>
  );

  return class extends React.PureComponent {
    render() {
      return <Connect {...this.props} />;
    }
  };
};

export { Provider, connect };

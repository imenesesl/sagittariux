import React, { useReducer } from "react";
import { testReducer, initialStateTest } from "./reducers";
import { Provider } from "../src";
import RightContainer from "./containers/Right";
import LeftContainer from "./containers/Left";
import "./style.css";

const App = () => {
  const store = {
    test: useReducer(testReducer, initialStateTest),
  };
  return (
    <Provider store={store}>
      <div className="principal-container">
        <LeftContainer />
        <RightContainer />
      </div>
    </Provider>
  );
};

export default App;

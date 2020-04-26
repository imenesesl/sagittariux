const ADD_COUNTER_ACTION = "ADD_COUNTER_ACTION";
const SUBSTRACT_COUNTER_ACTION = "SUBSTRACT_COUNTER_ACTION";

const initialStateTest = {
  counter: 0,
};

const testReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_COUNTER_ACTION:
      return {
        ...state,
        counter: state.counter + payload,
      };
    case SUBSTRACT_COUNTER_ACTION:
      return {
        ...state,
        counter: state.counter - payload,
      };
    default:
      throw new Error("Action no valid");
  }
};

const addAction = (value) => {
  return {
    type: ADD_COUNTER_ACTION,
    payload: value,
  };
};

const substractAction = (value) => {
  return {
    type: SUBSTRACT_COUNTER_ACTION,
    payload: value,
  };
};

export { addAction, substractAction, initialStateTest, testReducer };

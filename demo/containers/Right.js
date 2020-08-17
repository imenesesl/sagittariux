import React from "react";
import { connect } from "../../src";
import { addAction, substractAction } from "../reducers";

const RightContainer = ({ dispatchAddAction, dispatchSubstractAction }) => {
  return (
    <div className="view-container right-container">
      <button onClick={() => dispatchAddAction(1)}>ADD</button>
      <button onClick={() => dispatchSubstractAction(1)}>SUBSTRACT</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchAddAction: (number) => dispatch(addAction(number)),
  dispatchSubstractAction: (number) => dispatch(substractAction(number)),
});

export default connect(null, mapDispatchToProps)(RightContainer);

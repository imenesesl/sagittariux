import React from "react";
import { connect } from "../../src";

const LeftContainer = ({ counter }) => {
  return (
    <div className="view-container letf-container">
      <span>{counter} </span>
    </div>
  );
};

const mapStateToProps = (state) => ({ counter: state.test.counter });

export default connect(mapStateToProps, null)(LeftContainer);

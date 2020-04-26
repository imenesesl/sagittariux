import React from "react";
import { useConnect } from "../../src";

const LeftContainer = React.memo((props) => {
  return (
    <div className="view-container letf-container">
      <span>{props.store.test.counter} </span>
    </div>
  );
});

export default useConnect(LeftContainer);

import React from "react";
//import PropTypes from "prop-types";

import Main from "../main/main";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {rentOptionsCount} = props;

  return (
    <Main rentOptionsCount={rentOptionsCount} />
  );
};
export default App;

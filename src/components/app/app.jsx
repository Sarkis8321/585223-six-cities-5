import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main";

const App = (props) => {
  const {rentOptionsCount} = props;

  return (
    <Main rentOptionsCount={rentOptionsCount} />
  );
};

App.propTypes = {
  rentOptionsCount: PropTypes.number.isRequired,
};

export default App;

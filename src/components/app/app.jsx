import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";


const App = (props) => {
  const {rentOptionsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            rentOptionsCount={rentOptionsCount}
            cardPlace={props}
          />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route path="/offer/:id" exact component={Offer}/>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  rentOptionsCount: PropTypes.number.isRequired,
  offerMock: PropTypes.array.isRequired,
  reviewMock: PropTypes.array.isRequired
};

export default App;

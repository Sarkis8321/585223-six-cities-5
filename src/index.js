import React from "react";
import ReactDOM from "react-dom";
import OfferMock from "./mock/offers";
import ReviewMock from "./mock/reviews";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer-offer";
import {ActionCreator} from "./action";
import App from "./components/app/app";
import cities from "./mock/cities";

const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Options = {
  RENT_COUNT: 100
};

ReactDOM.render(
    <Provider store={store}>
      <App
        rentOptionsCount={Options.RENT_COUNT}
        offerMock={OfferMock}
        reviewMock={ReviewMock}
        cities={cities}
      />
    </Provider>,
    document.querySelector(`#root`)
);

const getOffers = (evt) =>{
  evt.preventDefault();
  store.dispatch({type: ActionCreator.change, city: evt.currentTarget.href.split(`/`).pop()});
};

const location = document.querySelectorAll(`.locations__item-link`);


for (let i = 0; i < location.length; i++) {
  location[i].addEventListener(`click`, getOffers);
}



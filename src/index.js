import React from "react";
import ReactDOM from "react-dom";
import OfferMock from "./mock/offers";
import ReviewMock from "./mock/reviews";

import App from "./components/app/app";

const Options = {
  RENT_COUNT: 100
};

ReactDOM.render(
    <App
      rentOptionsCount={Options.RENT_COUNT}
      offerMock={OfferMock}
      reviewMock={ReviewMock}
    />,
    document.querySelector(`#root`)
);

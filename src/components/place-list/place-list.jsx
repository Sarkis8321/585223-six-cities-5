import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CardPlace from "./card-place";


class PlaceList extends PureComponent {
  constructor(props) {

    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.state = {
      activePlace: -1,
    };
  }

  handleHover(placeIndex) {
    this.setState({
      activePlace: placeIndex
    });
  }

  render() {
    const {offerMock} = this.props;
    return (

      <div className="cities__places-list places__list tabs__content">

        {
          offerMock.map((offer) => (

            <CardPlace key={offer.id} offer={offer} handleHover={this.handleHover} />
          ))
        }

      </div>
    );

  }
}

PlaceList.propTypes = {
  offerMock: PropTypes.array.isRequired,
};
export default PlaceList;

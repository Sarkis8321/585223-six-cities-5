import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
const city = [52.38333, 4.9];
const zoom = 12;
const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

class Coord extends PureComponent {


  constructor(props) {

    super(props);
    this.state = {};

  }

  componentDidMount() {


    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);
    const {offerMock} = this.props;
    offerMock.forEach((offerCords) => {
      leaflet
        .marker(offerCords.coord, {icon})
        .addTo(map);
    });

  }

  render() {
    const style = {
      height: `100%`,
      width: `100%`,
    };
    return (
      <div id="map" style={style}></div>
    );

  }
}
Coord.propTypes = {
  offerMock: PropTypes.array.isRequired,
};

export default Coord;

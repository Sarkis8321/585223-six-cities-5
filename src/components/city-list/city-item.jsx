import React from "react";
import PropTypes from 'prop-types';

const CityItem = ({id,name}) => {
    console.log('helo');
  return (
    <li className="locations__item" >
        <a className="locations__item-link tabs__item" href={name}>
            <span>{name}</span>
        </a>
    </li>     
  );
};

CityItem.propTypes = {
  name: PropTypes.string.isRequired,
  // currentcity: PropTypes.array.isRequired,
};

/* const mapStateToProps = (state) => ({
  currentcity: state.currentcity,
  cities: state.cities,
});

const mapDispatchToProps = (dispatch) => ({
  onUserChange() {
    dispatch(ActionCreator.incrementStep());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Cities); */
export default CityItem;

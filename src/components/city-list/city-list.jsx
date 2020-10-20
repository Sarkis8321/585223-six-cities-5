import React from "react";
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";


const Cities = (props) => {
  const {
    cities,
    currentcity

  } = props;


  return <Redirect to="/" />;
};

Cities.propTypes = {
  cities: PropTypes.arrayOf.isRequired,
  currentcity: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  currentcity: state.currentcity,
  cities: state.cities,
});

const mapDispatchToProps = (dispatch) => ({
  onUserChange() {
    dispatch(ActionCreator.incrementStep());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Cities);

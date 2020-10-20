import {extend} from '../utils';
import cities from "../mock/cities";
import offers from "../mock/offers";

export const initialState = {
  activeCityId: 10,
  cities,
  offers,
};

const ActionType = {
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
};

const ActionCreator = {
  setActiveCity: (id) => ({
    type: ActionType.SET_ACTIVE_CITY,
    payload: id,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {
        activeCityId: action.payload,
      });

    default: {
      return state;
    }
  }
};

export {reducer, ActionType, ActionCreator};
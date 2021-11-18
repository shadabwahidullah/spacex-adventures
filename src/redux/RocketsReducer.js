import axios from 'axios';

export const FETCH_ROCKETS = '/spacex-adventures/rockets/FETCH_ROCKETS';
export const RESERVE_ROCKET = '/spacex-adventures/rockets/RESERVE_ROCKET';

const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = { Rockets: [] };

export const fetchRocketsCreator = (dispatch) => {
  axios.get(BASE_URL).then((res) => {
    dispatch({
      type: FETCH_ROCKETS,
      payload: res.data,
    });
  });
};

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, Rockets: action.payload };
    case RESERVE_ROCKET:
      return {
        ...state,
        Rockets: state.Rockets.map((rocket) => {
          if (rocket.id === action.payload) {
            return { ...rocket, reserved: true };
          }
          return rocket;
        }),
      };
    default:
      return state;
  }
};

export default reducer;

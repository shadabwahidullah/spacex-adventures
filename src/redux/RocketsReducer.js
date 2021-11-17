import axios from 'axios';

export const FETCH_ROCKETS = '/spacex-adventures/rockets/FETCH_ROCKETS';

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, Rockets: action.payload };
    default:
      return state;
  }
};

export default reducer;

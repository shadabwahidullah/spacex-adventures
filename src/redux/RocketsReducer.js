import axios from 'axios';

export const FETCH_ROCKETS = '/spacex-adventures/rockets/FETCH_ROCKETS';

const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = {};

export const FetchRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const fetchRocketsCreator = (dispatch) => {
  axios.get(BASE_URL).then((res) => {
    console.log('response from fetched url', res.data);
  });
  dispatch({
    type: FETCH_ROCKETS,
    payload: {},
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      console.log(action.payload);
      return { ...state, Rockets: action.payload };
    default:
      return state;
  }
};

export default reducer;

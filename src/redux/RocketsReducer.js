export const FETCH_ROCKETS = '/spacex-adventures/rockets/FETCH_ROCKETS';

// const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = {};

export const fetchRocketsCreator = (dispatch, payload) => {
  dispatch(
    {
      type: FETCH_ROCKETS,
      payload,
    },
    [],
  );
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

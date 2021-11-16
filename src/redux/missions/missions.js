import axios from 'axios';

// Action Types
const FETCH_MISSIONS = 'spaceXAdventure/missions/FETCH_MISSIONS';

const initialState = [];

// Action Creators
export const fetchMissions = () => async (dispatch) => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  const { data } = response;

  dispatch({ type: FETCH_MISSIONS, payload: data });
};

// Mission Reducer
const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default missionsReducer;

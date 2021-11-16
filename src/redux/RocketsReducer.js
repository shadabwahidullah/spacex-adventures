import axios from 'axios';

export const FETCH_ROCKETS = '/spacex-adventures/rockets/FETCH_ROCKETS';

const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = { Rockets: [] };

// const simplifyRockets = (data) => {
//   let rockets = [];

//   rockets = data.map((r) => {
//     console.log('the rocked with id ', r.id, r);
//     console.log('the rocked with name ', r.rocket_name);
//     console.log('the rocked with description ', r.description);
//     console.log('the rocked with images ', r.flickr_images);
//     return r.id;
//   });
//   console.log('rockets array at the end is ', rockets);
//   // return rocket
// };

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
      console.log(action.payload);
      return { ...state, Rockets: action.payload };
    default:
      return state;
  }
};

export default reducer;

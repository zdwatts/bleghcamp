// import { fetch } from "./csrf";

const SET_ARTIST = "artists/getArtist";
// const LOAD_ARTISTS = "artists/getArtists";

// export const getArtists = () => async (dispatch, getState) => {

// }

const setArtist = (artist) => {
  return {
    type: SET_ARTIST,
    payload: artist
  }
}

export const getArtist = artistId => {
  return async (dispatch) => {
    const res = await fetch(`/api/artists/${artistId}`);

    const data  = await res.json();

    dispatch(setArtist(data));

    // console.log(data);

    return res;
  }
}

const initialState = { artist: {} }

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTIST:
      return action.payload;
    default:
      return state;
  }
}

export default artistReducer;

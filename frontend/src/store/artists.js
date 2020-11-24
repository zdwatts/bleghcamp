// import { fetch } from "./csrf";

const SET_ARTIST = "artists/getArtist";
const LOAD_ARTISTS = "artists/getArtists";

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
    console.log("test");
    const res = await fetch(`/api/artists/${artistId}`);

    const { artist } = await res.json();

    console.log("ARTIST:", artist)

    dispatch(setArtist(artist));


    return res;
  }
}

const initialState = { artist: null }

const artistReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_ARTIST:
      return action.payload;
    default:
      return state;
  }
}

export default artistReducer;

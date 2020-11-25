// import { fetch } from "./csrf";

const SET_ARTIST = "artists/getArtist";
const LOAD_ARTISTS = "artists/getArtists";


const setArtist = (artist) => {
  return {
    type: SET_ARTIST,
    payload: artist
  }
}

export const loadArtists = (artists) => {
  return {
    type: LOAD_ARTISTS,
    payload: artists
  }
}

export const getArtists = () => {
  return async (dispatch) => {
    const res = await fetch("api/artists/");

    const data = await res.json();

    dispatch(loadArtists(data));

    return res;
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

const initialState = { artist: {}, artistAlbums: [], artistSongs: [], artists: [] }

const artistReducer = (state = initialState, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case SET_ARTIST:
      return action.payload;
    case LOAD_ARTISTS:
      return {
        ...state, artists: action.payload
      }
    default:
      return state;
  }
}

export default artistReducer;

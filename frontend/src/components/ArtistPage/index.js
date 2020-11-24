import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtist } from "../../store/artists";
import { useParams } from "react-router-dom";


const ArtistPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const artist = useSelector((state) => state.artist)

  useEffect(() => {
    dispatch(getArtist(params.id))
  }, [dispatch, params])

  return (
    <>
      <h1>{artist.artistName}</h1>
      <audio controls>
        <source src=""></source>
      </audio>
    </>
  );
};

export default ArtistPage;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtist } from "../../store/artists";
import { useParams } from "react-router-dom";
import "./ArtistPage.css";


const ArtistPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const artistData = useSelector((state) => state.artistData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getArtist(params.id))
    setLoading(false);
  }, [dispatch, params])

  if (loading) return null;

  console.log(artistData)

  return (
    <>
      <h1 className="headings">{artistData.artist.artistName}</h1>
      <h2 className="headings">Albums</h2>
      <ul>
        {artistData.artistAlbums.map(album => <li className="album-title">{album.albumTitle}
          {/* <ul>
          {artistData.artistSongs.map(song => <li>{song.songTitle}</li>)}
          </ul> */}
        </li>)}
      </ul>
    </>
  );
};

export default ArtistPage;

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

  const playSong = () => {

  }


  return (
    <>
      <h1 className="headings">{artistData.artist.artistName}</h1>
      <img src={artistData.artist.bandPhoto} alt={artistData.artist.id}/>
      <h2 className="headings">Albums</h2>
      <ul>
        {artistData.artistAlbums.map(album => <li key={album.id} className="album-title">{album.albumTitle}
          <img alt={album.id} src={album.albumArt}/>
          <ul>
            {artistData.artistSongs.map(song =>
            {
              if (song.albumId === album.id) {
                return <li key={song.id} onClick={playSong}>{song.songTitle}</li>
            }})}
          </ul>
        </li>)}
      </ul>
    </>
  );
};

export default ArtistPage;

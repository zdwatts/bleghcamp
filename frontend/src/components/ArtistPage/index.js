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
    return (
      <audio controls></audio>
    )
  }

  console.log("ARTIST:", artistData.artist);
  console.log("ALBUMS:", artistData.artistAlbums);
  console.log("SONGS:", artistData.artistSongs);

  return (
    <>
      <h1 className="headings">{artistData.artist.artistName}</h1>
      <h3 className="headings">{artistData.artist.genre}</h3>
      <img className="band-photo" src={artistData.artist.bandPhoto} alt={artistData.artist.id}/>
      <h2 className="headings">Albums</h2>
      <ul>
        {artistData.artistAlbums.map(album => <li key={album.id} className="album-title">{album.albumTitle}
          <li>{album.releaseYear}</li>
          <li><img className="album-art" alt={album.id} src={album.albumArt}/></li>
          <ul>
            {artistData.artistSongs.map(song =>
            {
              if (song.albumId === album.id) {
                return <li className="song-title" key={song.id} onClick={playSong}>{song.songTitle} {song.length}</li>
              }})}
          </ul>
              <br></br>
        </li>)}
      </ul>
    </>
  );
};

export default ArtistPage;

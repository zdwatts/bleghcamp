import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArtists } from "../../store/artists";
import "./Browse.css";

const Browse = () => {
  const dispatch = useDispatch();
  const artistData = useSelector((state) => state.artistData.artists);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getArtists())
    setLoading(false)
  }, [dispatch])

  if (loading || !artistData || !artistData.artists) return null;


  return (
    <>
      <h1>Artists</h1>
      <ul>
        {artistData.artists.length && artistData.artists.map(artist => <li key={artist.id}>
          <NavLink to={`/artists/${artist.id}`}>{artist.artistName}</NavLink>
        </li>)}
      </ul>
    </>
  )
}

export default Browse;

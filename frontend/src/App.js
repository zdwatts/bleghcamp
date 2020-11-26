import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SignUpFormPage from "./components/SignUpFormPage";
import ArtistPage from "./components/ArtistPage";
import Browse from "./components/Browse";
import Splash from "./components/Splash";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup" component={SignUpFormPage}/>
          <Route path="/artists/:id" component={ArtistPage} />
          <Route path="/artists" component={Browse} />
          <Route exact path="/" component={Splash} />
        </Switch>
      )}
    </>
  );
}

export default App;

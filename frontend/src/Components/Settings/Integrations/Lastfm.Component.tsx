//http://www.last.fm/api/auth/?api_key=a243d072dd7d17fb2833f1be860f8c98

import React, { useEffect, useState } from "react";
import axios from "axios";

const MINUTE_MS = 1000;

export default function LastFM() {
  const checkLoggedIn = ("accessToken" in localStorage); 
  const [loggedIn, setLoggedIn] = useState(checkLoggedIn)
  const getToken = localStorage.getItem("accessToken") || ' ';
  const [token, setToken] = useState(getToken);
  const [lastFMData, setLastFMData] = useState<any>({});

  useEffect(() => {
    // fetchCurrentSong().then((songData : any) => {
    //   setCurrentSong(songData)
    // })
  }, []);

  const fetchCurrentSong = async () => {
      try {
      const response = await axios
        .get(`https://api.spotify.com/v1/me/player/currently-playing`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      return response.data;
    } catch (error) {
      if (error?.response.status === 401) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("tokenType");
        localStorage.removeItem("expiresIn");
      }
    }
  }

  const renderLastFM = () => {
    console.log("CURRENT SONG: ")
    console.log(lastFMData)
    console.log("THIS ONE")
    return lastFMData?.item  ? 
      (
    <div className="spotify-card">
        <p className="spotify-song">hi</p>
    </div>
      ) : (<p>?</p>)
    }

    function connectLastFM() {
      window.location.href = `https://www.last.fm/api/auth?api_key=a243d072dd7d17fb2833f1be860f8c98`;
      setLoggedIn(true);
  }
  
  function disconnectLastFM() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("tokenType");
    localStorage.removeItem("expiresIn");
    setLoggedIn(false);
  }


  return (
    <>
    {/* <button onClick={() => setValue(value+1)}>Get Playlists</button> */}
    <div className="spotify-container">
            <h1>LastFM</h1> 
            {loggedIn ? 
            (<button className="red-button" onClick={() => disconnectLastFM()}>DISCONNECT</button>) :
            (<button className="green-button" onClick={() => connectLastFM()}>CONNECT</button>)
        }
      {renderLastFM()}
      </div>
    </>
  );
};
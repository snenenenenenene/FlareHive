import React, { useEffect, useState } from "react";
import axios from "axios";

const MINUTE_MS = 1000;

export default function Spotify() {
  const checkLoggedIn = ("accessToken" in localStorage); 
  const [loggedIn, setLoggedIn] = useState(checkLoggedIn)
  const getToken = localStorage.getItem("accessToken") || ' ';
  const [token, setToken] = useState(getToken);
  const [currentSong, setCurrentSong] = useState<any>({});
  const CLIENT_ID = "d79310a6611d4a30b9fdc28a4a52e088"
    const SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/settings/integrations"
    const SPACE_DELIMITER = "%20"
    const SCOPES = ["user-read-currently-playing", "user-read-playback-state"];
    const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

    const getReturnedParamsFromSpotifyAuth = (hash : any) => {
        const stringAfterHashtag = hash.substring(1);
        const paramsInUrl = stringAfterHashtag.split("&");
        const paramsSplitUp = paramsInUrl.reduce((accumulator : any, currentValue : any) => {
          const [key, value] = currentValue.split("=");
          accumulator[key] = value;
          return accumulator;
        }, {});
        return paramsSplitUp;
      };

  useEffect(() => {
    fetchCurrentSong().then((songData : any) => {
      setCurrentSong(songData)
    })
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
      getReturnedParamsFromSpotifyAuth(window.location.hash);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("tokenType");
      localStorage.removeItem("expiresIn");

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
    }
    const interval = setInterval(() => {
      fetchCurrentSong().then((songData : any) => {
        setCurrentSong(songData)
      })
    }, MINUTE_MS)
    return () => {
      clearInterval(interval)
    };
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

  const renderCurrentSong = () => {
    console.log("CURRENT SONG: ")
    console.log(currentSong)
    console.log("THIS ONE")
    return currentSong?.item  ? 
      (
    <div className="spotify-card">
        <p className="spotify-song">{currentSong.item.name}</p>
        <p className="spotify-album">{currentSong.item.album.name}</p>
        <p className="spotify-artist">{currentSong.item.album.artists.map((artist : any) => {
            return (
                <p>{artist?.name}</p>
            )
        })}</p>
        <img 
        src={currentSong.item.album.images[1].url}
        />
    </div>
      ) : (<p>No Song Playing</p>)
    }

    function connectSpotify() {
      window.location.href = `${SPOTIFY_AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
      setLoggedIn(true);
  }
  
  function disconnectSpotify() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("tokenType");
    localStorage.removeItem("expiresIn");
    setLoggedIn(false);
  }


  return (
    <>
    {/* <button onClick={() => setValue(value+1)}>Get Playlists</button> */}
    <div className="spotify-container">
            <h1>Spotify: </h1> 
            {loggedIn ? 
            (<button className="red-button" onClick={() => disconnectSpotify()}>DISCONNECT</button>) :
            (<button className="green-button" onClick={() => connectSpotify()}>CONNECT</button>)
        }
      {renderCurrentSong()}
      </div>
    </>
  );
};
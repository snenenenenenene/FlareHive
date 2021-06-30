import SettingsSidebar from "./SettingsSidebar";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { useHistory} from "react-router";
import axios from "axios";
import {useEffect, useLayoutEffect, useState} from 'react';
import Spotify from "./Integrations/Spotify.Component";
import LastFM from "./Integrations/Lastfm.Component";

const Integrations = (props : any)  => {
    const history = useHistory();
    const previousRoute = props.location.state?.previousURL || `/home`

    const goBack = () => {
        history.push(previousRoute)
    }
      useEffect(() => {
      });
      
return (
    <div className="container">
        <SettingsSidebar/>
        <div className="setting-container">
        <h1 className="setting-title">Integrations <CloseRoundedIcon style={{fontSize: 35}} className="close-icon" onClick={() => goBack() }/></h1>
        <div className="integration-container">
            <Spotify/>
            <LastFM/>
        </div>
        </div>
    </div>
)
}

export default Integrations;
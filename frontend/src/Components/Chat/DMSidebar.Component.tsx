import { useHistory } from "react-router";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

const DMSidebar =(props : any) => {
  const history = useHistory();
    const handleChatClick = (e : any) => {
        e.preventDefault();
        history.push({
          pathname: `/chat/${e.target.id}`
       });
      }

      const handleSettingsClick = (e : any, route : string) => {
        history.push(`/${route}`);
      } 
      
    return (
      <div className="sidebar">
        <div className="chats">
          <div className="chat" id="Dashboard" onClick={(e) => {history.push(`/`)}}>Dashboard</div>
            <div className="direct-messages-text">DIRECT MESSAGES: </div>
              <div className="chat" id="Jonas" onClick={(e) => {handleChatClick(e)}}>
              <AccountCircleRoundedIcon style={{fontSize: 40, marginRight: 10}} className="user-icon"/>
              Jonas
              </div>
              <div className="chat" id="Senne" onClick={(e) => {handleChatClick(e)}}>
              <AccountCircleRoundedIcon style={{fontSize: 40, marginRight: 10}} className="user-icon"/>
              Senne
              </div>
              <div className="chat" id="Charlie" onClick={(e) => {handleChatClick(e)}}>
              <AccountCircleRoundedIcon style={{fontSize: 40, marginRight: 10}} className="user-icon"/>
              Charlie
              </div>
          </div>
          <div className="sidebar-dashboard">
            <div className="control-dock">
            <SettingsRoundedIcon style={{fontSize: 40}} className="user-icon" onClick={(e) => {handleSettingsClick(e, "settings")}}/>
            </div>
            <div className="user-settings-dock">
              <AccountCircleRoundedIcon style={{fontSize: 50}} className="user-icon" onClick={(e) => {handleSettingsClick(e, "user")}}/>
              <p style={{fontWeight: 1000, fontSize: 25}}>User1</p>
              </div>
            </div>
          </div>
    )
}

export default DMSidebar;
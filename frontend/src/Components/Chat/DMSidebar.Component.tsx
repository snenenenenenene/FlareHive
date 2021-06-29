import { useHistory } from "react-router";

const DMSidebar =(props : any) => {
  const history = useHistory();
    const handleChatClick = (e : any) => {
        e.preventDefault();
        history.push({
          pathname: `/chat/${e.target.id}`
       });
      }
      
    return (
        <div className="chats">
            <div className="direct-messages-text">DIRECT MESSAGES: </div>
              <div className="chat" id="Jonas" onClick={(e) => {handleChatClick(e)}}>Jonas</div>
              <div className="chat" id="Senne" onClick={(e) => {handleChatClick(e)}}>Senne</div>
          </div>
    )
}

export default DMSidebar;
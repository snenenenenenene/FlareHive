import DMSidebar from "./DMSidebar.Component";
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const Chat = ({match} : any, props : any) => {

    const sendMessage = (e : any) => {
        e.preventDefault();
    }


    return (
      <div className="chat-route">
        <DMSidebar/>
        <div className="recipient-name-container">
          <div className="recipient-name">{match.params.recipient}</div>
          </div>
          <form className="chat-container" onSubmit={(e) => sendMessage(e)}>
        <div>
        <div className="chat-area">
        </div>
        <div className="input-container">
        <textarea className="chat-input" placeholder="Type Something..." ></textarea>
        <button onClick={(e) => sendMessage(e)} className="chat-button" type="submit">
        <SendRoundedIcon style={{fontSize: 40}} />
        </button>
        </div>
        </div>
        </form>
      </div>
    );
  }

  export default Chat;
  
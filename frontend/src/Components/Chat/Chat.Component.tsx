import DMSidebar from "./DMSidebar.Component";
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const Chat = ({match} : any, props : any) => {

    const sendMessage = (e : any) => {
        e.preventDefault();
    }


    return (
      <div className="container">
        <DMSidebar/>
          <form className="chat-container" onSubmit={(e) => sendMessage(e)}>
          <h1 className="chat-title">{match.params.recipient}
          </h1>
        <div className="chat-display">
        </div>
        <div className="input-container">
        <span contentEditable className="chat-input" placeholder="Type Something..." ></span>
        <button onClick={(e) => sendMessage(e)} className="chat-button" type="submit">
        <SendRoundedIcon style={{fontSize: 40}} />
        </button>
        </div>
        </form>
      </div>
    );
  }

  export default Chat;
  
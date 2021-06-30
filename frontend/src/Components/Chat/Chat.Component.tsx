import DMSidebar from "./DMSidebar.Component";
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import { useState } from "react";

const Chat = ({match} : any, props : any) => {
  // const [messages, setMessages] = useState<any>([])
 const messages = [
   {message_author: "Jonas", message_content: 
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus elementum pulvinar. Sed sed justo non mi ultrices auctor vel ac diam. Class aptent taciti sociosqu ad litora torquent per morbi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus elementum pulvinar. Sed sed justo non mi ultrices auctor vel ac diam. Class aptent taciti sociosqu ad litora torquent per morbi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus elementum pulvinar. Sed sed justo non mi ultrices auctor vel ac diam. Class aptent taciti sociosqu ad litora torquent per morbi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus elementum pulvinar. Sed sed justo non mi ultrices auctor vel ac diam. Class aptent taciti sociosqu ad litora torquent per morbi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus elementum pulvinar. Sed sed justo non mi ultrices auctor vel ac diam. Class aptent taciti sociosqu ad litora torquent per morbi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus elementum pulvinar. Sed sed justo non mi ultrices auctor vel ac diam. Class aptent taciti sociosqu ad litora torquent per morbi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus elementum pulvinar. Sed sed justo non mi ultrices auctor vel ac diam. Class aptent taciti sociosqu ad litora torquent per morbi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus elementum pulvinar. Sed sed justo non mi ultrices auctor vel ac diam. Class aptent taciti sociosqu ad litora torquent per morbi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus elementum pulvinar. Sed sed justo non mi ultrices auctor vel ac diam. Class aptent taciti sociosqu ad litora torquent per morbi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus elementum pulvinar. Sed sed justo non mi ultrices auctor vel ac diam. Class aptent taciti sociosqu ad litora torquent per morbi'"},
   {message_author: "Senne", message_content: "Kom zelf"},
   {message_author: "Jonas", message_content: "Uw mama"},
  ]
    const sendMessage = (e : any) => {
        e.preventDefault();
    }

    const call = () => {
      return;
    }
    
    const videoCall = () => {
      return;
    }

    return (
      <div className="container">
        <DMSidebar/>
          <form className="chat-container" onSubmit={(e) => sendMessage(e)}>
          <h1 className="chat-title">
              {match.params.recipient}
              <div className="user-action-dock">
              <VideocamRoundedIcon style={{fontSize: 35}} className="user-action-icon" onClick={() => videoCall() }/>
              <PhoneRoundedIcon style={{fontSize: 35}} className="user-action-icon" onClick={() => call() }/>
              </div>
          </h1>
        <div className="chat-display">
          {messages.map((message : any) => (
          <div className="message-container">
            <div className="message-user-icon"></div>
            <div className="">
          <div className="message-user">{message.message_author}</div>
          <div className="message-metadata"></div>
          <div className="message-text">
            {message.message_content}
          </div>
          </div>
          </div>
          ))}
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
  
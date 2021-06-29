import DMSidebar from "./DMSidebar.Component";

const Chat = ({match} : any, props : any) => {

    const sendMessage = (e : any) => {
        e.preventDefault();
        console.log(e)
    }


    return (
      <div>
        <DMSidebar/>
          <form onSubmit={(e) => sendMessage(e)}>
            <div className="recipient-name-container">
          <div className="recipient-name">{match.params.recipient}</div>
          </div>
        <div className="chat-container">
        <div className="chat-area">
        </div>
        <div className="input-container">
        <textarea className="chat-input" placeholder="Type Something..." ></textarea>
        <button onClick={(e) => sendMessage(e)} className="chat-button" type="submit" >
        </button>
        </div>
        </div>
        </form>
      </div>
    );
  }

  export default Chat;
  
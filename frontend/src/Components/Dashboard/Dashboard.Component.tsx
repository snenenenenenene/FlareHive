import { Redirect } from "react-router";

 const Dashboard = (props : any) => {
    const handleChatClick = (e : any) => {
        e.preventDefault();
        console.log("submitted");
        //do your task here before redirect
        //...
        props.history.push(`/chat/${e.target.id}`);
      }

    return (
      <div>
          <div className="chats">
              <div className="chat" id="Jonas" onClick={(e) => {handleChatClick(e)}}>Jonas</div>
              <div className="chat" id="Senne" onClick={(e) => {handleChatClick(e)}}>Senne</div>
          </div>
        <h1>Dashboard</h1>
      </div>
    );
  }

  export default Dashboard;
  
import DMSidebar from "../Chat/DMSidebar.Component";
 const Dashboard = (props : any) => {
    return (
      <div className="chat-route">
        <DMSidebar props={props}/>
        <h1>Dashboard</h1>
      </div>
    );
  }

  export default Dashboard;
  
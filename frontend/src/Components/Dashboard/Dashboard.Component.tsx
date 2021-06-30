import DMSidebar from "../Chat/DMSidebar.Component";
 const Dashboard = (props : any) => {
    return (
      <div className="container">
        <DMSidebar/>
        <div className="dashboard-container">
        <h1 className="dashboard-title">Dashboard</h1>
      </div>
      </div>
    );
  }

  export default Dashboard;
  
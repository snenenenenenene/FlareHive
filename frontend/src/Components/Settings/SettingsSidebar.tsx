import { useHistory } from "react-router-dom";

function SettingsSidebar(props : any) {
    const history = useHistory();
    return (
        <div className="sidebar">
        <div className="sidebar-settings-container">
        <div className="chat" id="Dashboard" onClick={(e) => {history.push(`/`)}}>Dashboard</div>
            <div className="direct-messages-text">SETTINGS: </div>
            <div className="sidebar-settings">Account</div>
            <div className="sidebar-settings">Customization</div>
            <div className="sidebar-settings">Accessibility</div>
            <div className="sidebar-settings">Integrations</div>
            <div className="sidebar-settings">Audio &amp; Video</div>
            <div className="sidebar-settings">Shortcuts</div>
            <div className="sidebar-settings">Language</div>
            <div className="sidebar-settings">Suggestions</div>
        </div>
        </div>
    )
    }
    
    export default SettingsSidebar;
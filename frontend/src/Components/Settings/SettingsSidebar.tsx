import { useHistory } from "react-router-dom";

function SettingsSidebar(props : any) {
    const history = useHistory();
    return (
        <div className="sidebar">
        <div className="sidebar-settings-container">
        <div className="chat" id="Dashboard" onClick={(e) => {history.push(`/`)}}>Dashboard</div>
            <div className="direct-messages-text">SETTINGS: </div>
            <div className="sidebar-settings" onClick={() => {history.push(`/settings/account`)}}>Account</div>
            <div className="sidebar-settings" onClick={() => {history.push(`/settings/customizations`)}}>Customization</div>
            <div className="sidebar-settings" onClick={() => {history.push(`/settings/accessibility`)}}>Accessibility</div>
            <div className="sidebar-settings" onClick={() => {
                console.log("integrations")
                history.push(`/settings/integrations`)
                }}>Integrations</div>
            <div className="sidebar-settings" onClick={() => {history.push(`/settings/audiovideo`)}}>Audio &amp; Video</div>
            <div className="sidebar-settings" onClick={() => {history.push(`/settings/shortcuts`)}}>Shortcuts</div>
            <div className="sidebar-settings" onClick={() => {history.push(`/settings/language`)}}>Language</div>
            <div className="sidebar-settings" onClick={() => {history.push(`/settings/suggestions`)}}>Suggestions</div>
        </div>
        </div>
    )
    }
    
    export default SettingsSidebar;
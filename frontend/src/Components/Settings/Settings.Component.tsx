import SettingsSidebar from "./SettingsSidebar";
import { useLocation } from "react-router-dom";

const Settings = (props : any)  => {
    const location = useLocation();
    const previousRoute = props.location.state?.previousURL || `${process.env.REACT_APP_FRONTEND_URL}`
console.log(props)
return (
    <div className="container">
        <SettingsSidebar/>
        <h1>settings</h1>
    </div>
)
}

export default Settings;
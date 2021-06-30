import SettingsSidebar from "./SettingsSidebar";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { useHistory} from "react-router";

const Account = (props : any)  => {
    const history = useHistory();
    const previousRoute = props.location.state?.previousURL || `/home`

    const goBack = () => {
        console.log(previousRoute)
        history.push(previousRoute)
    }

return (
    <div className="container">
        <SettingsSidebar/>
        <div className="setting-container">
        <h1 className="setting-title">Account <CloseRoundedIcon style={{fontSize: 35}} className="close-icon" onClick={() => goBack() }/></h1>
        </div>
    </div>
)
}

export default Account;
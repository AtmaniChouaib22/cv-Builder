import './styles/personalDisp.css'
import { MailIcon, PhoneIcon, LocationIcon } from './assets/icons';
function DisplayPersonal({personalInfo}) {
    return (
        <div className="Personal-display">
            <div className="Full-name">{personalInfo.fullName}</div>
            <div className="Contact-display">
                <div className="Email"><MailIcon stroke="#f8fafc" width="20" height="20" />{personalInfo.email}</div>
                <div className="Location"><LocationIcon stroke="#f8fafc" width="20" height="20" />{personalInfo.location}</div>
                <div className="Phone"><PhoneIcon stroke="#f8fafc" width="20" height="20" />{personalInfo.phone}</div>
            </div>
        </div>
    )
}

export default DisplayPersonal ;
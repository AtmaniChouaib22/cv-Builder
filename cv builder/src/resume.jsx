import DisplayEducation from "./displayEducations"
import DisplayPersonal from "./displayPersonal"
import './styles/resume.css'

export default function CreateResume({educationInfoArr, personalInfoArr}) {
    return (
        <div className="Resume-Paper">
            <DisplayPersonal personalInfoArr={personalInfoArr} />
            <div>Education</div>
            <DisplayEducation educationInfoArr={educationInfoArr}/>
            <div>Experience</div>
        </div>
    )
}
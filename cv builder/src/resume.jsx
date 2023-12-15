import DisplayEducation from "./displayEducations"
import DisplayPersonal from "./displayPersonal"
import DisplayExperience from "./displayExperiences"
import './styles/resume.css'

export default function CreateResume({educationInfoArr, personalInfoArr, experienceInfoArr}) {
    return (
        <div className="Resume-Paper">
            <DisplayPersonal personalInfoArr={personalInfoArr} />
            <div className="Divider">Education</div>
            <DisplayEducation educationInfoArr={educationInfoArr}/>
            <div className="Divider">Experience</div>
            <DisplayExperience experienceInfoArr={experienceInfoArr} />
        </div>
    )
}
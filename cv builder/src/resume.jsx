import DisplayPersonal from "./displayPersonal"
import DisplayEducation from "./displayEducation";
import DisplayExperience from "./displayExperience";
import './styles/resume.css'

function CreateResume({submitted, eduSubmitted, expSubmitted, personalInfo, educationInfo, experienceInfo}) {
    return (
        <div className="Resume">
             <div className="Resume-items">
                {submitted && <DisplayPersonal personalInfo={personalInfo}/>}
                {eduSubmitted && <DisplayEducation educationInfo={educationInfo} />}
                {expSubmitted && <DisplayExperience experienceInfo={experienceInfo} />}
             </div>
        </div>
    )
}

export default CreateResume ;
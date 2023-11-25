import DisplayPersonal from "./displayPersonal"
import DisplayEducation from "./displayEducation";
import DisplayExperience from "./displayExperience";
import './styles/resume.css'

function CreateResume({submitted, eduSubmitted, expSubmitted, personalInfo, educationInfo, experienceInfo}) {
    return (
        <div className="Resume">
             <div className="Resume-items">
                {submitted && <DisplayPersonal personalInfo={personalInfo}/>}
                <div className="Seperator">
                    Education
                </div>
                {eduSubmitted && <DisplayEducation educationInfo={educationInfo} />}
                <div className="Seperator">
                    Experience
                </div>
                {expSubmitted && <DisplayExperience experienceInfo={experienceInfo} />}
             </div>
        </div>
    )
}

export default CreateResume ;
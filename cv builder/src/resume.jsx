import DisplayPersonal from "./displayPersonal"
import DisplayEducation from "./displayEducation";
import DisplayExperience from "./displayExperience";

function CreateResume({submitted, eduSubmitted, expSubmitted, personalInfo, educationInfo, experienceInfo}) {
    return (
        <div className="Resume">
             {submitted && <DisplayPersonal personalInfo={personalInfo}/>}
             {eduSubmitted && <DisplayEducation educationInfo={educationInfo} />}
             {expSubmitted && <DisplayExperience experienceInfo={experienceInfo} />}
        </div>
    )
}

export default CreateResume ;
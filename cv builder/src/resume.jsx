import DisplayPersonal from "./displayPersonal"
import DisplayEducation from "./displayEducation";

function CreateResume({submitted, eduSubmitted,personalInfo, educationInfo}) {
    return (
        <div className="Resume">
             {submitted && <DisplayPersonal personalInfo={personalInfo}/>}
             {eduSubmitted && <DisplayEducation educationInfo={educationInfo} />}
        </div>
    )
}

export default CreateResume ;
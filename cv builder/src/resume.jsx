import DisplayPersonal from "./displayPersonal"

function CreateResume({submitted , personalInfo}) {
    return (
        <div className="Resume">
             {submitted && <DisplayPersonal personalInfo={personalInfo}/>}
        </div>
    )
}

export default CreateResume ;